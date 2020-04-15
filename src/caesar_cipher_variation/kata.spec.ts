// Write your tests here
import { string_incrementer } from './kata'

describe('addition', () => {
  it('should append a 1 if no integer', async () => {
    expect(string_incrementer('foo')).toEqual('foo1')
  })

  
})
