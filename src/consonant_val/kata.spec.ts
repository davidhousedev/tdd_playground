// Write your tests here
import { consonantValue } from './kata'
import { mySplit } from './kata'
import { getValue } from './kata'

describe('my split', () => {
  it('should isolate consonant sets: zodiacs', async () => {
    expect(mySplit('zodiacs')).toEqual(['z', 'd', 'cs'])
  })

  it('should isolate consonant sets: strength', async () => {
    expect(mySplit('strength')).toEqual(['str', 'ngth'])
  })

  it('should change case of capital letters', async () => {
    expect(mySplit('STRENGTH')).toEqual(['str', 'ngth'])
  })
})

describe('get value', () => {
  it('should calculate consonant set value: ngth', async () => {
    expect(getValue('b')).toEqual(2)
  })

  it('should calculate consonant set value: cs', async () => {
    expect(getValue('cs')).toEqual(22)
  })

  it('should calculate consonant set value: ngth', async () => {
    expect(getValue('ngth')).toEqual(49)
  })
})

describe('consonant value', () => {
  it('should find highest value: zodiacs', async () => {
    expect(consonantValue('zodiacs')).toEqual(26)
  })

  it('should find highest value: strength', async () => {
    expect(consonantValue('strength')).toEqual(57)
  })
})
