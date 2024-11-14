import { expect, it } from 'vitest'
import { getPPI, getResolution, getScaleDomination, ppiToPX, pxToPPI } from './scaleCalculator'

const scaleDomination = 5.90995197141668e8
const resolution = 1.406250026231578
const resolutionMeter = 156367.47924
const ppi = 96

it('scaleDomination (degree)', () => {
  expect(Math.abs(getScaleDomination(resolution, ppi, 'degree') - scaleDomination) / scaleDomination).toBeLessThan(1e-5)
})

it('scaleDomination (meter)', () => {
  expect(Math.abs(getScaleDomination(resolutionMeter, ppi, 'meter') - scaleDomination) / scaleDomination).toBeLessThan(1e-5)
})

it('resolution (degree)', () => {
  expect(Math.abs(getResolution(scaleDomination, ppi, 'degree') - resolution) / resolution).toBeLessThan(1e-5)
})

it('resolution (meter)', () => {
  expect(Math.abs(getResolution(scaleDomination, ppi, 'meter') - resolutionMeter) / resolutionMeter).toBeLessThan(1e-5)
})

it('ppi (degree)', () => {
  expect(getPPI(scaleDomination, resolution, 'degree')).toBeCloseTo(ppi, 3)
})

it('ppi (meter)', () => {
  expect(getPPI(scaleDomination, resolutionMeter, 'meter')).toBeCloseTo(ppi, 3)
})

it('ppi to pixelSize', () => {
  expect(ppiToPX(90.713)).toBeCloseTo(0.00028, 6)
})

it('pixelSize to ppi', () => {
  expect(pxToPPI(0.00028)).toBeCloseTo(90.714, 3)
})
