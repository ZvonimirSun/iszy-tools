import type { AliOssConfig, Config, ImageItem, Uploader } from '../type'
import { DeleteObjectsCommand, paginateListObjectsV2, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'

/**
 * 获取配置
 */
function config(options: Partial<AliOssConfig> = {}): Config[] {
  return [
    {
      name: 'accessKeyId',
      type: 'input',
      default: options.accessKeyId || '',
      required: true,
      label: '设定KeyId',
      hint: 'AccessKeyId',
    },
    {
      name: 'accessKeySecret',
      type: 'password',
      default: options.accessKeySecret || '',
      required: true,
      label: '设定KeySecret',
      hint: 'AccessKeySecret',
    },
    {
      name: 'securityToken',
      type: 'password',
      default: options.securityToken || '',
      required: false,
      label: '设定SecurityToken',
      hint: 'SecurityToken',
    },
    {
      name: 'bucket',
      type: 'input',
      default: options.bucket || '',
      required: true,
      label: '设定存储空间名',
      hint: 'Bucket',
    },
    {
      name: 'area',
      type: 'input',
      default: options.area || '',
      required: true,
      label: '确认存储区域',
      hint: '例如oss-cn-beijing',
    },
    {
      name: 'path',
      type: 'input',
      default: options.path || '',
      required: false,
      label: '指定存储路径',
      hint: '例如img/',
    },
    {
      name: 'options',
      type: 'input',
      default: options.options || '',
      required: false,
      label: '设定网址后缀',
      hint: '例如?x-oss-process=xxx',
    },
    {
      name: 'customUrl',
      type: 'input',
      default: options.customUrl || '',
      required: false,
      label: '设定自定义域名',
      hint: '例如https://example.com',
    },
  ]
}

/**
 * handle
 * @param options {Object} 阿里云配置
 * @param options.accessKeyId {String}
 * @param options.accessKeySecret {String}
 * @param options.bucket {String} 存储空间名
 * @param options.area {String} 存储区域代号
 * @param options.path {String} 自定义存储路径
 * @param options.customUrl {String} 自定义域名，注意要加 `http://` 或者 `https://`
 * @param options.options {String} 针对图片的一些后缀处理参数
 * @param file {File} 文件
 * @return {Promise<object>}
 */
async function upload(options: AliOssConfig, file: File): Promise<ImageItem> {
  const customUrl = options.customUrl
  const path = options.path || ''
  const s3Client = new S3Client({
    region: options.area,
    endpoint: `https://${options.area}.aliyuncs.com`,
    credentials: {
      accessKeyId: options.accessKeyId,
      secretAccessKey: options.accessKeySecret,
      sessionToken: options.securityToken,
    },
  })
  const command = new PutObjectCommand({
    // 填写Bucket名称。
    Bucket: options.bucket,
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    Key: path + file.name,
    // 指定文件内容或Buffer。
    Body: new Blob([file]),
    ContentType: file.type,
  })
  try {
    await s3Client.send(command)
    const optionUrl = options.options || ''
    if (customUrl) {
      return {
        id: uuidv4(),
        name: file.name,
        url: `${customUrl}/${path}${file.name}${optionUrl}`,
      }
    }
    else {
      return {
        id: uuidv4(),
        name: file.name,
        url: `https://${options.bucket}.${options.area}.aliyuncs.com/${path}${file.name}${optionUrl}`,
      }
    }
  }
  catch (error) {
    throw new Error('上传失败')
  }
}

async function list(config: AliOssConfig) {
  const customUrl = config.customUrl
  const path = config.path || ''
  const optionUrl = config.options || ''

  const s3Client = new S3Client({
    region: config.area,
    endpoint: `https://${config.area}.aliyuncs.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.accessKeySecret,
      sessionToken: config.securityToken,
    },
  })
  const paginator = paginateListObjectsV2(
    { client: s3Client, pageSize: 10 },
    { Bucket: config.bucket },
  )
  const objects = []
  for await (const page of paginator) {
    objects.push(...page.Contents || [])
  }
  return objects.sort((a, b) => {
    return b.LastModified!.getTime() - a.LastModified!.getTime()
  }).map((item) => {
    if (customUrl) {
      return {
        id: uuidv4(),
        name: item.Key!,
        url: `${customUrl}/${path}${item.Key}${optionUrl}`,
      }
    }
    else {
      return {
        id: uuidv4(),
        name: item.Key!,
        url: `https://${config.bucket}.${config.area}.aliyuncs.com/${path}${item.Key}${optionUrl}`,
      }
    }
  }) || []
}

async function remove(config: AliOssConfig, imageItem: ImageItem) {
  const path = config.path || ''
  const s3Client = new S3Client({
    region: config.area,
    endpoint: `https://${config.area}.aliyuncs.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.accessKeySecret,
      sessionToken: config.securityToken,
    },
  })
  const command = new DeleteObjectsCommand({
    // 填写Bucket名称。
    Bucket: config.bucket,
    Delete: {
      Objects: [
        {
          Key: path + imageItem.name,
        },
      ],
    },
  })
  try {
    await s3Client.send(command)
  }
  catch (error) {
    throw new Error('删除失败')
  }
}

export const aliyun: Uploader<AliOssConfig> = {
  name: '阿里云OSS',
  config,
  upload,
  list,
  remove,
}
