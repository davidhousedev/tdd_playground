// regex's
const ORIGINAL_DELIMS: RegExp = /,\n/
const SINGLE_CUSTOM_DELIM: RegExp = /\/\/\D\n/
const LONG_CUSTOM_DELIM: RegExp = /\[(.*?)\]/

export function add(numbers: string = '') {
  if (!numbers) return 0

  let delims: Array<string> = [',', '\n']
  let delimiters: RegExp
  let negative: Array<number> = []
  const max: number = 1000

  if (numbers.match(SINGLE_CUSTOM_DELIM)) {
    delims.push(numbers.split(ORIGINAL_DELIMS)[0][2])
  } else if (numbers.match(LONG_CUSTOM_DELIM)) {
    delims.push(numbers.split(LONG_CUSTOM_DELIM)[1])
  }

  delimiters = new RegExp(`[${delims.join('')}]`)

  const reducer = (accumulator, currentValue: string) => {
    const val: number = parseInt(currentValue, 10)
    const max: number = 1000
    if (!isNaN(val) && val < max) {
      if (val >= 0) {
        return accumulator + val
      } else {
        negative.push(val)
      }
    }
    return accumulator
  }

  const sum: number = numbers.split(delimiters).reduce(reducer, 0)

  if (negative.length > 0) {
    throw `negatives not allowed: ${negative.join(' ')}`
  }

  return sum
}
