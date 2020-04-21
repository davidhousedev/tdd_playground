// Write your tests here
import { add } from './kata'

describe('addition', () => {
  it('can add two positive numbers', async () => {
    expect(add(1, 2)).toEqual(3)
  })
})
