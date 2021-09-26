import OSS from 'ali-oss'

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
 * @return {Promise<Object>}
 */
const handle = async (options, file) => {
  const customUrl = options.customUrl
  const path = options.path || ''
  const client = new OSS({
    region: options.area,
    accessKeyId: options.accessKeyId,
    accessKeySecret: options.accessKeySecret,
    bucket: options.bucket
  })
  const result = await client.put(path + file.name, new Blob([file]))
  if (result.res && result.res.status === 200) {
    const optionUrl = options.options || ''
    if (customUrl) {
      return { name: file.name, url: `${customUrl}/${path}${file.name}${optionUrl}` }
    } else {
      return { name: file.name, url: `https://${options.bucket}.${optionUrl.area}.aliyuncs.com/${path}${file.name}${optionUrl}` }
    }
  } else {
    throw new Error('上传失败')
  }
}
/**
 * 获取配置
 * @param options {Object} 阿里云配置
 * @param options.accessKeyId {String}
 * @param options.accessKeySecret {String}
 * @param options.bucket {String} 存储空间名
 * @param options.area {String} 存储区域代号
 * @param options.path {String} 自定义存储路径
 * @param options.customUrl {String} 自定义域名，注意要加 `http://` 或者 `https://`
 * @param options.options {String} 针对图片的一些后缀处理参数
 * @return {Array}
 */
const config = (options = {}) => {
  return [
    {
      name: 'accessKeyId',
      type: 'input',
      default: options.accessKeyId || '',
      required: true,
      label: '设定KeyId',
      hint: 'AccessKeyId'
    },
    {
      name: 'accessKeySecret',
      type: 'password',
      default: options.accessKeySecret || '',
      required: true,
      label: '设定KeySecret',
      hint: 'AccessKeySecret'
    },
    {
      name: 'bucket',
      type: 'input',
      default: options.bucket || '',
      required: true,
      label: '设定存储空间名',
      hint: 'Bucket'
    },
    {
      name: 'area',
      type: 'input',
      default: options.area || '',
      required: true,
      label: '确认存储区域',
      hint: '例如oss-cn-beijing'
    },
    {
      name: 'path',
      type: 'input',
      default: options.path || '',
      required: false,
      label: '指定存储路径',
      hint: '例如img/'
    },
    {
      name: 'options',
      type: 'input',
      default: options.options || '',
      required: false,
      label: '设定网址后缀',
      hint: '例如?x-oss-process=xxx'
    },
    {
      name: 'customUrl',
      type: 'input',
      default: options.customUrl || '',
      required: false,
      label: '设定自定义域名',
      hint: '例如https://example.com'
    }
  ]
}

export default {
  name: '阿里云OSS',
  handle,
  config
}
