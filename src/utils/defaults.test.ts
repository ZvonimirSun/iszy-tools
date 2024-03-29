import { expect, it } from 'vitest'
import { withDefaultOnError, withDefaultOnErrorAsync } from './defaults'

it('return function result when no error', () => {
  expect(withDefaultOnError(() => 'success', 'default')).toBe('success')
})

it('return default value when error', () => {
  expect(withDefaultOnError(() => {
    throw new Error('error')
  }, 'default')).toBe('default')
})

it('async return function result when no error', async () => {
  expect(await withDefaultOnErrorAsync(async () => (await new Promise(resolve => setTimeout(() => resolve('success'), 100))), 'default')).toBe('success')
})

it('async return default value when error', async () => {
  expect(await withDefaultOnErrorAsync(async () => (await new Promise((resolve, reject) => setTimeout(() => reject(new Error('error')), 100))), 'default')).toBe('default')
})
