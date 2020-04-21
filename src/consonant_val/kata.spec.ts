// Write your tests here
import { consonant_value } from './kata'
import { my_split } from './kata'
import { get_value } from './kata'

describe('my split', () => {
  it('should isolate consonant sets: zodiacs', async () => {
    expect(my_split('zodiacs')).toEqual(['z', 'd', 'cs'])
  })

  it('should isolate consonant sets: strength', async () => {
    expect(my_split('strength')).toEqual(['str', 'ngth'])
  })

  it('should change case of capital letters', async () => {
    expect(my_split('STRENGTH')).toEqual(['str', 'ngth'])
  })
})

describe('get value', () => {
  it('should calculate consonant set value: ngth', async () => {
    expect(get_value('b')).toEqual(2)
  })

  it('should calculate consonant set value: cs', async () => {
    expect(get_value('cs')).toEqual(22)
  })

  it('should calculate consonant set value: ngth', async () => {
    expect(get_value('ngth')).toEqual(49)
  })
})

describe('consonant value', () => {
  it('should find highest value: zodiacs', async () => {
    expect(consonant_value('zodiacs')).toEqual(26)
  })

  it('should find highest value: strength', async () => {
    expect(consonant_value('strength')).toEqual(57)
  })
})