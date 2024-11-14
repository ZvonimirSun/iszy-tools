import type { SettingKey, SettingObject } from './palServerSettings'
import { cloneDeep } from 'lodash-es'

export const settingList: SettingObject[] = [
  {
    key: 'Difficulty',
    label: '难度',
    type: 'select',
    default: 'None',
    options: [
      { value: 'None', label: '正常' },
      { value: 'Easy', label: '简单' },
      { value: 'Difficult', label: '困难' },
    ],
  },
  {
    key: 'DayTimeSpeedRate',
    label: '白天时速',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    max: 5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'NightTimeSpeedRate',
    label: '夜晚时速',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    max: 5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'ExpRate',
    label: '经验倍率',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalCaptureRate',
    label: '帕鲁捕获几率',
    type: 'number',
    default: 1.000000,
    min: 0.5,
    max: 2,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalSpawnNumRate',
    label: '帕鲁重生数量',
    type: 'number',
    default: 1,
    min: 0.5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalDamageRateAttack',
    label: '帕鲁伤害倍率',
    type: 'number',
    default: 1,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalDamageRateDefense',
    label: '帕鲁受伤倍率',
    type: 'number',
    default: 1,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PlayerDamageRateAttack',
    label: '玩家伤害倍率',
    type: 'number',
    default: 1,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PlayerDamageRateDefense',
    label: '玩家受伤倍率',
    type: 'number',
    default: 1,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PlayerStomachDecreaceRate',
    label: '玩家饱腹感下降速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    max: 5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PlayerStaminaDecreaceRate',
    label: '玩家体力下降速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    max: 5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PlayerAutoHPRegeneRate',
    label: '玩家血量恢复速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PlayerAutoHpRegeneRateInSleep',
    label: '玩家睡眠血量恢复速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalStomachDecreaceRate',
    label: '帕鲁饱腹感下降速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    max: 5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalStaminaDecreaceRate',
    label: '玩家体力下降速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    max: 5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalAutoHPRegeneRate',
    label: '帕鲁血量恢复速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'PalAutoHpRegeneRateInSleep',
    label: '帕鲁睡眠血量恢复速度',
    type: 'number',
    default: 1.000000,
    min: 0.1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'BuildObjectDamageRate',
    label: '建筑受伤倍率',
    type: 'number',
    default: 1.000000,
    min: 0.5,
    max: 3,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'BuildObjectDeteriorationDamageRate',
    label: '建筑劣化速率',
    type: 'number',
    default: 1.000000,
    min: 0,
    max: 10,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'CollectionDropRate',
    label: '采集掉落率',
    type: 'number',
    default: 1.000000,
    min: 0.5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'CollectionObjectHpRate',
    label: '采集对象血量倍率',
    type: 'number',
    default: 1.000000,
    min: 0.5,
    max: 3,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'CollectionObjectRespawnSpeedRate',
    label: '采集对象重生速率',
    type: 'number',
    default: 1.000000,
    min: 0.5,
    max: 3,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'EnemyDropItemRate',
    label: '怪物掉落倍率',
    type: 'number',
    default: 1.000000,
    min: 0.5,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'DeathPenalty',
    label: '死亡惩罚',
    type: 'select',
    default: 'All',
    options: [
      { value: 'None', label: '不掉落' },
      { value: 'Item', label: '仅掉落道具' },
      { value: 'ItemAndEquipment', label: '掉落道具和装备' },
      { value: 'All', label: '全部掉落' },
    ],
  },
  {
    key: 'bEnablePlayerToPlayerDamage',
    label: '玩家之间伤害',
    type: 'switch',
    default: false,
  },
  {
    key: 'bEnableFriendlyFire',
    label: '友方伤害',
    type: 'switch',
    default: false,
  },
  {
    key: 'bEnableInvaderEnemy',
    label: '袭击事件',
    type: 'switch',
    default: true,
  },
  {
    key: 'bActiveUNKO',
    label: '大便',
    type: 'switch',
    default: false,
  },
  {
    key: 'bEnableAimAssistPad',
    label: '手柄辅助瞄准',
    type: 'switch',
    default: true,
  },
  {
    key: 'bEnableAimAssistKeyboard',
    label: '键盘辅助瞄准',
    type: 'switch',
    default: false,
  },
  {
    key: 'DropItemMaxNum',
    label: '最大掉落数',
    type: 'number',
    default: 3000,
  },
  {
    key: 'DropItemMaxNum_UNKO',
    label: '最大掉落大便数',
    type: 'number',
    default: 100,
  },
  {
    key: 'BaseCampMaxNum',
    label: '最大基地数',
    type: 'number',
    default: 128,
  },
  {
    key: 'BaseCampWorkerMaxNum',
    label: '最大基地内工人数',
    type: 'number',
    default: 20,
  },
  {
    key: 'DropItemAliveMaxHours',
    label: '掉落物保存时间',
    type: 'number',
    default: 1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'bAutoResetGuildNoOnlinePlayers',
    label: '不在线玩家自动退出公会',
    type: 'switch',
    default: false,
  },
  {
    key: 'AutoResetGuildTimeNoOnlinePlayers',
    label: '自动退出公会时间',
    type: 'number',
    default: 72,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'GuildPlayerMaxNum',
    label: '工会最大人数',
    type: 'number',
    default: 20,
  },
  {
    key: 'PalEggDefaultHatchingTime',
    label: '巨大蛋孵化时间(h)',
    type: 'number',
    default: 1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'WorkSpeedRate',
    label: '工作效率',
    type: 'number',
    default: 1,
    formatter: (value: number) => value.toFixed(6),
  },
  {
    key: 'bIsMultiplay',
    label: '多人游戏',
    type: 'switch',
    default: false,
  },
  {
    key: 'bIsPvP',
    label: 'PVP模式',
    type: 'switch',
    default: false,
  },
  {
    key: 'bCanPickupOtherGuildDeathPenaltyDrop',
    label: '其他公会死亡掉落物捡取',
    type: 'switch',
    default: false,
  },
  {
    key: 'bEnableNonLoginPenalty',
    label: '登陆惩罚?',
    type: 'switch',
    default: false,
  },
  {
    key: 'bEnableFastTravel',
    label: '快速旅行',
    type: 'switch',
    default: true,
  },
  {
    key: 'bIsStartLocationSelectByMap',
    label: '选择出生点',
    type: 'switch',
    default: true,
  },
  {
    key: 'bExistPlayerAfterLogout',
    label: '登出自动关服',
    type: 'switch',
    default: false,
  },
  {
    key: 'bEnableDefenseOtherGuildPlayer',
    label: '工会间伤害',
    type: 'switch',
    default: false,
  },
  {
    key: 'CoopPlayerMaxNum',
    label: 'CoopPlayerMaxNum',
    type: 'number',
    default: 4,
  },
  {
    key: 'ServerPlayerMaxNum',
    label: '服务器最大玩家人数',
    type: 'number',
    default: 32,
  },
  {
    key: 'ServerName',
    label: '服务器名称',
    type: 'input',
    default: 'Palworld Server',
  },
  {
    key: 'ServerDescription',
    label: '服务器描述',
    type: 'input',
    default: '',
  },
  {
    key: 'AdminPassword',
    label: '管理员密码',
    type: 'input',
    default: '',
  },
  {
    key: 'ServerPassword',
    label: '服务器密码',
    type: 'input',
    default: '',
  },
  {
    key: 'PublicPort',
    label: '服务器端口',
    type: 'number',
    default: 8211,
  },
  {
    key: 'PublicIP',
    label: '服务器IP',
    type: 'input',
    default: '',
  },
  {
    key: 'RCONEnabled',
    label: 'RCONEnabled',
    type: 'switch',
    default: false,
  },
  {
    key: 'RCONPort',
    label: 'RCONPort',
    type: 'number',
    default: 25575,
  },
  {
    key: 'Region',
    label: '地区',
    type: 'input',
    default: '',
  },
  {
    key: 'bUseAuth',
    label: 'bUseAuth',
    type: 'switch',
    default: true,
  },
  {
    key: 'BanListURL',
    label: '封禁名单地址',
    type: 'input',
    default: 'https://api.palworldgame.com/api/banlist.txt',
  },
]

export function getEmptySettings(): SettingObject[] {
  return cloneDeep(settingList)
}

export function iniToSettings(ini: string): SettingObject[] {
  if (!ini) {
    throw new Error('ini is empty')
  }
  const settings: SettingObject[] = getEmptySettings()
  try {
    const iniMap: Partial<{
      [key in SettingKey]: string
    }> = {}
    ini.replaceAll('\n', '').replaceAll('\r', '').slice(0, -1).split('OptionSettings=(')[1].split(',').forEach((item) => {
      const tmp = item.split('=')
      const key: SettingKey = tmp[0].trim() as SettingKey
      let value = tmp[1].trim()
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }
      iniMap[key] = value
    })
    for (const setting of settings) {
      let value: string
      if (iniMap[setting.key] == null) {
        continue
      }
      else {
        value = iniMap[setting.key] as string
      }
      switch (setting.type) {
        case 'select':
          setting.default = value
          break
        case 'number':
          setting.default = Number(value)
          break
        case 'switch':
          setting.default = value === 'True'
          break
        default:
          setting.default = value
          break
      }
    }
  }
  catch (e) {
    throw new Error('wrong ini format')
  }
  return settings
}

export function settingsToIni(settings: SettingObject[]): string {
  let result = ''
  for (const setting of settings) {
    switch (setting.type) {
      case 'select':
        result += `${setting.key}=${setting.default},`
        break
      case 'number':
        result += `${setting.key}=${setting.formatter ? setting.formatter(setting.default || 0) : setting.default?.toString()},`
        break
      case 'switch':
        result += `${setting.key}=${setting.default ? 'True' : 'False'},`
        break
      default:
        result += `${setting.key}="${setting.default}",`
        break
    }
  }
  return `[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(${result.slice(0, -1)})\n\n`
}
