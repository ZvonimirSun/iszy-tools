import type { ToolMenu } from '@/types/tool'
import type { Optional } from '@/types/common'

const tools: Optional<ToolMenu, 'id'>[] = [
  {
    type: 'JSON工具',
    icon: '',
    children: [
      {
        name: 'JSON编辑器',
        link: '/jsonEditor',
      },
      {
        name: 'GeoJSON.io',
        link: '/geoJson',
        tags: [
          'geojson',
          'gis',
        ],
      },
    ],
  },
  {
    type: '编辑器',
    icon: 'i-icon-park-outline-editor',
    children: [
      {
        name: 'TinyEditor',
        link: '/tinyEditor',
      },
      {
        name: '简易白板',
        link: '/tlDraw',
      },
      {
        name: '在线流程图',
        link: 'https://app.diagrams.net/',
      },
    ],
  },
  {
    type: '地图工具',
    icon: 'i-icon-park-solid-map-draw',
    children: [
      {
        name: '经纬度查询',
        link: '/latLng',
      },
      {
        name: '行政区数据',
        link: 'https://datav.aliyun.com/tools/atlas/index.html',
      },
    ],
  },
  {
    type: '加密工具',
    icon: 'i-icon-park-solid-file-lock',
    children: [
      {
        name: '文本HASH',
        link: '/hashText',
      },
      {
        name: '文件HASH',
        link: '/hashFile',
      },
      {
        name: '在线JWT解密',
        link: '/jwt',
      },
      {
        name: 'GeoHash编解码',
        link: '/geohash',
      },
      {
        name: 'UUID生成器',
        link: '/uuid',
        tags: [
          'uuid',
          'guid',
        ],
      },
    ],
  },
  {
    type: '转换工具',
    icon: 'i-icon-park-outline-transform',
    children: [
      {
        name: '颜色转换器',
        link: '/colorTransform',
      },
      {
        name: 'Base64字符串编解码',
        link: '/base64',
      },
      {
        name: 'Base64图片编码',
        link: '/imageBase64',
      },
      {
        name: '二维码生成/识别',
        link: '/qrcode',
      },
      {
        name: '哔哩哔哩AV、BV号转换',
        link: '/bilibiliBv2av',
      },
      {
        name: '数字中文转换',
        link: '/nzh',
      },
      {
        name: '亲戚关系计算器',
        link: '/relationship',
      },
    ],
  },
  {
    type: '网页工具',
    icon: 'i-icon-park-outline-browser-chrome',
    children: [
      {
        name: '短网址',
        link: '/urls',
        requiresAuth: true,
      },
      {
        name: 'URL编解码',
        link: '/urlEncode',
      },
      {
        name: 'UserAgent解析',
        link: '/userAgent',
      },
      {
        name: 'WHOIS查询',
        link: '/whois',
      },
      {
        name: '随机数生成',
        link: '/random',
      },
      {
        name: '渐变色生成器',
        link: '/gradientColor',
      },
    ],
  },
  {
    type: '图像和视频',
    icon: 'i-icon-park-solid-picture-one',
    children: [
      {
        name: '极简图床',
        link: '/imgHosting',
      },
      {
        name: '图片加水印',
        link: '/watermark',
      },
      {
        name: '屏幕录制',
        link: '/screenRecord',
      },
    ],
  },
  {
    type: '开发工具',
    icon: 'i-icon-park-outline-code',
    children: [
      {
        name: 'Mock工具',
        link: '/mock',
        requiresAuth: true,
      },
      {
        name: 'CSS格式化',
        link: '/cssFormatter',
      },
      {
        name: 'XML格式化',
        link: '/xmlEditor',
      },
      {
        name: '时间计算',
        link: '/timeCompute',
      },
      {
        name: '在线ASCII码对照表',
        link: '/ascii',
      },
      {
        name: '查看网页源码',
        link: '/viewSourceCode',
      },
      {
        name: '正则大全',
        link: '/anyRule',
      },
      {
        name: '前端CDN搜索',
        link: '/cdnQuery',
      },
      {
        name: '中国色',
        link: '/chineseColor',
      },
      {
        name: '资源包',
        link: 'https://libview.iszy.xyz',
      },
    ],
  },
  {
    type: '数据工具',
    icon: 'i-icon-park-outline-data-user',
    children: [
      {
        name: '身份证解析',
        link: '/idChinese',
      },
      {
        name: 'glTF模型浏览',
        link: '/3dView',
      },
      {
        name: '这是什么动漫',
        link: '/whatAnimeIsThis',
      },
    ],
  },
  {
    type: '运维',
    icon: 'i-icon-park-outline-computer',
    children: [
      {
        name: 'WebSSH',
        link: '/webssh',
      },
      {
        name: 'Linux命令查询',
        link: '/linuxCommand',
      },
    ],
  },
  {
    type: '理财',
    icon: 'i-icon-park-solid-financing-one',
    children: [
      {
        name: '多次提前还贷计算器',
        link: '/mtqLoans',
      },
      {
        name: '基金股票信息查询',
        link: 'http://www.zodiacn.ltd',
      },
      {
        name: '实时汇率',
        link: '/forexRate',
      },
    ],
  },
  {
    type: '游戏',
    icon: 'i-icon-park-solid-game',
    children: [
      {
        name: '塞尔达荒野之息地图',
        link: '/zeldaBotwMap',
      },
      {
        name: '2048',
        link: '/2048',
      },
      {
        name: '俄罗斯方块',
        link: '/tetris',
      },
      {
        name: '奥利奥生成器',
        link: '/oreooo',
      },
      {
        name: 'PalWorld服务器设置',
        link: '/palServerSettings',
      },
    ],
  },
  {
    type: '其他',
    icon: 'i-icon-park-solid-all-application',
    children: [
      {
        name: 'Chromium下载工具',
        link: '/chromiumDownload',
      },
      {
        name: '淘宝优惠券精选',
        link: 'https://shop.iszy.xyz',
      },
    ],
  },
  {
    type: '网站相关',
    icon: 'i-icon-park-solid-setting-two',
    children: [
      {
        name: '网站管理',
        link: '/settings',
        statistics: false,
      },
      {
        name: '留言反馈',
        link: 'https://github.com/ZvonimirSun/iszy-tools/discussions',
        statistics: false,
      },
    ],
  },
]

export default tools
