import crypto from 'crypto'
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

  const signature = crypto.createHmac('sha1', options.accessKeySecret).update(signString).digest('base64')
  return `OSS ${options.accessKeyId}:${signature}`
}

const handle = async () => {
}

const config = () => {
  const userConfig = {}
  return [
    {
      name: 'accessKeyId',
      type: 'input',
      default: userConfig.accessKeyId || '',
      required: true
    },
    {
      name: 'accessKeySecret',
      type: 'input',
      default: userConfig.accessKeySecret || '',
      required: true
    },
    {
      name: 'bucket',
      type: 'input',
      default: userConfig.bucket || '',
      required: true
    },
    {
      name: 'area',
      type: 'input',
      default: userConfig.area || '',
      required: true
    },
    {
      name: 'path',
      type: 'input',
      default: userConfig.path || '',
      required: false
    },
    {
      name: 'customUrl',
      type: 'input',
      default: userConfig.customUrl || '',
      required: false
    },
    {
      name: 'options',
      type: 'input',
      default: userConfig.options || '',
      required: false
    }
  ]
}

export default {
  name: '阿里云OSS',
  handle,
  config
}
