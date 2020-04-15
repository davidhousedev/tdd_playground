// Write your tests here
import { string_incrementer } from './kata'

describe('addition', () => {
  it('should append a 1 if no integer', async () => {
    expect(string_incrementer('foo')).toEqual('foo1')
  })

  it('if there is a number it should be incremented by 1', async () => {
    expect(string_incrementer('foo1')).toEqual('foo2')
  })

  it('should account for leading zeros', async () => {
    expect(string_incrementer('bar001')).toEqual('bar002')
  })
})
