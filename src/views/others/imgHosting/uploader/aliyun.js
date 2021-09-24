import hmacSHA1 from 'crypto-js/hmac-sha1.js'
import Base64 from 'crypto-js/enc-base64'
import mime from 'mime-types'

/**
 * generate OSS signature
 * @param options {Object} 阿里云配置
 * @param options.accessKeyId {String}
 * @param options.accessKeySecret {String}
 * @param options.bucket {String} 存储空间名
 * @param options.area {String} 存储区域代号
 * @param options.path {String} 自定义存储路径
 * @param options.customUrl {String} 自定义域名，注意要加 `http://` 或者 `https://`
 * @param options.options {String} 针对图片的一些后缀处理参数
 * @param fileName {String} 文件名
 * @returns {String} 签名
 */
const generateSignature = (options, fileName) => {
  const date = new Date().toUTCString()
  const mimeType = mime.lookup(fileName)
  if (!mimeType) throw Error(`No mime type found for file ${fileName}`)

  const signString = `PUT\n\n${mimeType}\n${date}\n/${options.bucket}/${options.path}${fileName}`

  const signature = Base64.stringify(hmacSHA1(signString, options.accessKeySecret))
  return `OSS ${options.accessKeyId}:${signature}`
}

const handle = async () => {
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
      required: true
    },
    {
      name: 'accessKeySecret',
      type: 'password',
      default: options.accessKeySecret || '',
      required: true
    },
    {
      name: 'bucket',
      type: 'input',
      default: options.bucket || '',
      required: true
    },
    {
      name: 'area',
      type: 'input',
      default: options.area || '',
      required: true
    },
    {
      name: 'path',
      type: 'input',
      default: options.path || '',
      required: false
    },
    {
      name: 'customUrl',
      type: 'input',
      default: options.customUrl || '',
      required: false
    },
    {
      name: 'options',
      type: 'input',
      default: options.options || '',
      required: false
    }
  ]
}

export default {
  name: '阿里云OSS',
  handle,
  config
}
