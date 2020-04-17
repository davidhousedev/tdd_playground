// Write your source code here

import { setupMaster } from 'cluster'

export function add(numbers: string) {
  if (!numbers) return 0

  let delims: Array<string> = [',', '\n']
  let delimiters: RegExp
  const og_delimiters: RegExp = /,\n/
  const single_custom_delimiter: RegExp = /\/\/\D\n/
  const long_custom_delimiter: RegExp = /\[(.*?)\]/
  let negative: Array<number> = []
  const max: number = 1000

  if (numbers.match(single_custom_delimiter)) {
    delims.push(numbers.split(og_delimiters)[0][2])
  } else if (numbers.match(long_custom_delimiter)) {
    delims.push(numbers.split(long_custom_delimiter)[1])
  }

  delimiters = new RegExp(`[${delims.join('')}]`)

  const arr: Array<string> = numbers
    .split(delimiters)
    .filter((item) => !isNaN(parseInt(item, 10)) && parseInt(item, 10) < max)

  const reducer = (accumulator, currentValue) =>
    currentValue < 0 ? negative.push(currentValue) : accumulator + currentValue
  const num_arr = arr.map(Number)
  const sum = num_arr.reduce(reducer)

  if (negative.length > 0) {
    throw `negatives not allowed: ${negative.join(' ')}`
  }

  return sum
}
