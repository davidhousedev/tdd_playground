// Write your tests here
import { add } from './kata'

describe('addition', () => {
  it('should return 0 if empty string provided', async () => {
    expect(add('')).toEqual(0)
  })
  it('should return single provided element', async () => {
    expect(add('1')).toEqual(1)
  })
  it('should return sum of two elements', async () => {
    expect(add('1,2')).toEqual(3)
  })
  it('should return sum of multiple elements', async () => {
    expect(add('2,3,4')).toEqual(9)
  })
  it('accepts newline as a valid delimiter', async () => {
    expect(add('1\n2,3')).toEqual(6)
  })
  it('should allow for customized delimiters', async () => {
    expect(add('//;\n1;2;4')).toEqual(7)
  })
  it('should throw error for negative elements', async () => {
    expect(() => add('-5,2,-10,9')).toThrow()
  })
  it('should ignore elements above 1000', async () => {
    expect(add('10002,4,4')).toEqual(8)
  })
  it('should allow delimiters of any length', async () => {
    expect(add('//[***]\n1***3***3')).toEqual(7)
  })
  // it('should allow multiple delimiters', async () => {
  //   expect(add('//[*][%]\n1*2%3')).toEqual(6)
  // })
})
