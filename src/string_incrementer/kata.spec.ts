// Write your tests here
import { string_incrementer } from './kata'
import { my_split } from './kata'

describe('incrementer', () => {
  it('should append a 1 if no integer', async () => {
    expect(string_incrementer('foo')).toEqual('foo1')
  })

  it('should increment ending number by 1', async () => {
    expect(string_incrementer('testing1')).toEqual('testing2')
  })

  it('should account for leading zeros', async () => {
    expect(string_incrementer('bar001')).toEqual('bar002')
  })
})

describe('my splitter', () => {
  it('should split word from numbers', async () => {
    expect(my_split('foo1')).toEqual(['foo', '1'])
  })
  it('should add 0s to string', async () => {
    expect(my_split('bar001')).toEqual(['bar00', '001'])
  })
})
