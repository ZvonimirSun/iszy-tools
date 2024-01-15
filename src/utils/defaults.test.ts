import { expect, test } from 'vitest'
import { withDefaultOnError, withDefaultOnErrorAsync } from './defaults'

test('return function result when no error', () => {
  expect(withDefaultOnError(() => 'success', 'default')).toBe('success')
})

test('return default value when error', () => {
  expect(withDefaultOnError(() => { throw new Error('error') }, 'default')).toBe('default')
})

test('return function result when no error', async () => {
  expect(await withDefaultOnErrorAsync(async () => (await new Promise((resolve) => setTimeout(() => resolve('success'), 100))), 'default')).toBe('success')
})

test('return default value when error', async () => {
  expect(await withDefaultOnErrorAsync(async () => (await new Promise((resolve, reject) => setTimeout(() => reject(new Error('error')), 100))), 'default')).toBe('default')
})
