type Settings = {
  'Difficulty': string,
  'DayTimeSpeedRate': number,
  'NightTimeSpeedRate': number,
  'ExpRate': number,
  'PalCaptureRate': number,
  'PalSpawnNumRate': number,
  'PalDamageRateAttack': number,
  'PalDamageRateDefense': number,
  'PlayerDamageRateAttack': number,
  'PlayerDamageRateDefense': number,
  'PlayerStomachDecreaceRate': number,
  'PlayerStaminaDecreaceRate': number,
  'PlayerAutoHPRegeneRate': number,
  'PlayerAutoHpRegeneRateInSleep': number,
  'PalStomachDecreaceRate': number,
  'PalStaminaDecreaceRate': number,
  'PalAutoHPRegeneRate': number,
  'PalAutoHpRegeneRateInSleep': number,
  'BuildObjectDamageRate': number,
  'BuildObjectDeteriorationDamageRate': number,
  'CollectionDropRate': number,
  'CollectionObjectHpRate': number,
  'CollectionObjectRespawnSpeedRate': number,
  'EnemyDropItemRate': number,
  'DeathPenalty': string,
  'bEnablePlayerToPlayerDamage': boolean,
  'bEnableFriendlyFire': boolean,
  'bEnableInvaderEnemy': boolean,
  'bActiveUNKO': boolean,
  'bEnableAimAssistPad': boolean,
  'bEnableAimAssistKeyboard': boolean,
  'DropItemMaxNum': number,
  'DropItemMaxNum_UNKO': number,
  'BaseCampMaxNum': number,
  'BaseCampWorkerMaxNum': number,
  'DropItemAliveMaxHours': number,
  'bAutoResetGuildNoOnlinePlayers': boolean,
  'AutoResetGuildTimeNoOnlinePlayers': number,
  'GuildPlayerMaxNum': number,
  'PalEggDefaultHatchingTime': number,
  'WorkSpeedRate': number,
  'bIsMultiplay': boolean,
  'bIsPvP': boolean,
  'bCanPickupOtherGuildDeathPenaltyDrop': boolean,
  'bEnableNonLoginPenalty': boolean,
  'bEnableFastTravel': boolean,
  'bIsStartLocationSelectByMap': boolean,
  'bExistPlayerAfterLogout': boolean,
  'bEnableDefenseOtherGuildPlayer': boolean,
  'CoopPlayerMaxNum': number,
  'ServerPlayerMaxNum': number,
  'ServerName': string,
  'ServerDescription': string,
  'AdminPassword': string,
  'ServerPassword': string,
  'PublicPort': number,
  'PublicIP': string,
  'RCONEnabled': boolean,
  'RCONPort': number,
  'Region': string,
  'bUseAuth': boolean,
  'BanListURL': string
}

export type SettingKey = keyof Settings

type SettingType = 'select' | 'number' | 'switch' | 'input'

interface BaseSetting {
  key: SettingKey,
  label: string,
  type: SettingType
}

interface SelectSetting extends BaseSetting {
  default: string,
  type: 'select',
  options: Array<{ value: string, label: string }>
}

interface NumberSetting extends BaseSetting {
  type: 'number',
  default?: number,
  formatter?: (value: number) => string
  min?: number,
  max?: number
}

interface SwitchSetting extends BaseSetting {
  type: 'switch',
  default: boolean
}

interface InputSetting extends BaseSetting {
  type: 'input',
  default: string
}

export type SettingObject = SelectSetting | NumberSetting | SwitchSetting | InputSetting
