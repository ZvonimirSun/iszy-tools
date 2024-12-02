import type { Config, S3Config, Uploader } from '../type'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

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
async function handle(options: S3Config, file: File): Promise<{
  name: string
  url: string
}> {
  const customUrl = options.customUrl
  const path = options.path || ''
  const s3Client = new S3Client({
    region: options.area,
    endpoint: `https://${options.area}.aliyuncs.com`,
    credentials: {
      accessKeyId: options.accessKeyId,
      secretAccessKey: options.accessKeySecret,
    },
  })
  const command = new PutObjectCommand({
    // 填写Bucket名称。
    Bucket: options.bucket,
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    Key: path + file.name,
    // 指定文件内容或Buffer。
    Body: new Blob([file]),
  })
  try {
    await s3Client.send(command)
    const optionUrl = options.options || ''
    if (customUrl) {
      return { name: file.name, url: `${customUrl}/${path}${file.name}${optionUrl}` }
    }
    else {
      return {
        name: file.name,
        url: `https://${options.bucket}.${options.area}.aliyuncs.com/${path}${file.name}${optionUrl}`,
      }
    }
  }
  catch (error) {
    throw new Error('上传失败')
  }
}

/**
 * 获取配置
 */
function config(options: Partial<S3Config> = {}): Config[] {
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

export const aliyun: Uploader<S3Config> = {
  name: '阿里云OSS',
  handle,
  config,
}
