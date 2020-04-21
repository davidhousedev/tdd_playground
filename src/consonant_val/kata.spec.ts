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