// Write your source code here

import { setupMaster } from 'cluster'

//export const add = (a: number, b: number): number => a + b

export function add(numbers: string) {
  var delims: Array<string> = [',', '\n']
  var delimiters: RegExp
  const single_custom_delimiter: RegExp = /\/\/\D\n/
  const long_custom_delimiter: RegExp = /\[(.*?)\]/
  var negative: Array<number> = []
  const max: number = 1000

  if (!numbers) {
    return 0
  }

  delimiters = new RegExp('[' + delims.join('') + ']')

  if (numbers.match(single_custom_delimiter)) {
    delims.push(numbers.split(delimiters)[0][2])
  }

  if (numbers.match(long_custom_delimiter)) {
    var index: number = 3
    var long_delim: string = ''
    while (numbers.split(delimiters)[0][index] != ']') {
      long_delim += numbers.split(delimiters)[0][index]
      index++
    }
    delims.push(long_delim)
  }

  delimiters = new RegExp('[' + delims.join('') + ']')

  var sum: number = 0
  var arr: Array<string> = numbers
    .split(delimiters)
    .filter((item) => !isNaN(parseInt(item)))
  for (var i: number = 0; i < arr.length; i++) {
    var num: number = parseInt(arr[i])
    if (num < 0) {
      negative.push(num)
    } else if (num > max) {
      num = 0
    }
    sum += num
  }

  if (negative.length > 0) {
    throw `negatives not allowed: ${negative.join(' ')}`
  }

  return sum
}
