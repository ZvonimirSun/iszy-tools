import type { Colord } from 'colord'
import type { FormRules } from 'element-plus'
import type { FormItemRule } from 'element-plus/es/components/form/src/types'
import type { Arrayable } from 'element-plus/es/utils'
import { withDefaultOnError } from '@/utils/defaults'
import { colord } from 'colord'

function buildColorFormat({
  label,
  parse = value => colord(value),
  format,
  placeholder,
  invalidMessage = `错误的 ${label} 格式。`,
  type = 'text',
}: {
  label: string
  parse?: (value: string) => Colord
  format: (value: Colord) => string
  placeholder?: string
  invalidMessage?: string
  type?: 'text' | 'color-picker'
}) {
  return {
    type,
    label,
    parse: (v: string) => withDefaultOnError(() => parse(v), undefined),
    format,
    placeholder,
    validation: (rule: unknown, value: string, callback: (e?: Error) => void): undefined => {
      if (!value) {
        callback()
      }
      else {
        if (parse(value).isValid()) {
          callback()
        }
        else {
          callback(new Error(invalidMessage))
        }
      }
    },
  }
}

function buildColorForm<T extends { [p: string]: ReturnType<typeof buildColorFormat> }>(formats: T): {
  ruleForm: { [K in keyof T]: string }
  rules: FormRules<{ [K in keyof T]: string }>
} {
  const record: Partial<{ [K in keyof T]: string }> = {}
  for (const key in formats) {
    record[key] = ''
  }
  const rules: Partial<Record<keyof T, Arrayable<FormItemRule>>> = {}
  for (const key in formats) {
    rules[key] = [
      {
        validator: formats[key]!.validation,
        trigger: 'change',
      },
    ]
  }
  return {
    ruleForm: reactive(record) as { [K in keyof T]: string },
    rules: reactive(rules) as FormRules<{ [K in keyof T]: string }>,
  }
}

export { buildColorForm, buildColorFormat }
