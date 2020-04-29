// Write your tests here
import { stringIncrementer } from './kata'
import { mySplit } from './kata'

describe('incrementer', () => {
  it('should append a 1 if no integer', async () => {
    expect(stringIncrementer('foo')).toEqual('foo1')
  })

  it('should increment ending number by 1', async () => {
    expect(stringIncrementer('testing1')).toEqual('testing2')
  })

  it('should account for leading zeros', async () => {
    expect(stringIncrementer('bar001')).toEqual('bar002')
  })
})

describe('my splitter', () => {
  it('should split word from numbers', async () => {
    expect(mySplit('foo1')).toEqual(['foo', '1'])
  })
  it('should add 0s to string', async () => {
    expect(mySplit('bar001')).toEqual(['bar00', '001'])
  })
})
