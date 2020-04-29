// Write your source code here

// upper case : 65 - 90
// lower case : 97 - 122

const UPPER_A: number = 'A'.charCodeAt(0) // returns 65
const UPPER_Z: number = 'Z'.charCodeAt(0) //returns 90
const LOWER_A: number = 'a'.charCodeAt(0) // returns 97
const LOWER_Z: number = 'z'.charCodeAt(0) // returns 122

export function caesar_encode(message: string = '', shift: number = 0) {
  let result: string = ''

  for (let i: number = 0; i < message.length; i++) {
    let charCode: number = message.charCodeAt(i)
    if (message.charAt(i) == ' ') {
      result += ' '
    } else if (
      charCode >= UPPER_A &&
      charCode <= UPPER_Z &&
      charCode + shift > UPPER_Z
    ) {
      // uppercase wrap around
      const newCode: number = ((charCode - UPPER_A + shift) % 26) + UPPER_A
      result += String.fromCharCode(newCode)
    } else if (
      charCode >= LOWER_A &&
      charCode <= LOWER_Z &&
      charCode + shift > LOWER_Z
    ) {
      // lower case wrap around
      const newCode: number = ((charCode - LOWER_A + shift) % 26) + LOWER_A
      result += String.fromCharCode(newCode)
    } else {
      result += String.fromCharCode(charCode + shift)
    }
    shift += 1
  }

  return result
}

export function runners(message: string = '', shift: number = 0) {
  let encoded = caesar_encode(message, shift)
  let runnerArray: Array<string> = []

  let size: number = Math.ceil(encoded.length / 5.0)
  let length: number = encoded.length

  for (let i: number = 0; i < 5; i++) {
    if (size <= length && length != 0) {
      runnerArray.push(encoded.substr(i * size, size))
      length -= size
    } else if (length != 0) {
      runnerArray.push(encoded.substr(i * size, size - 1))
      length -= size - 1
    } else if (length == 0) {
      runnerArray.push('')
    }
  }

  return runnerArray
}

export function decode(encrypted: Array<string> =[], shift: number =0) {
  let result: string = ''
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const message: string = encrypted.reduce(reducer, '')

  for (let i: number = 0; i < message.length; i++) {
    let charCode: number = message.charCodeAt(i)

    if (message.charAt(i) == ' ') {
      result += ' '
    } else if (
      charCode >= UPPER_A &&
      charCode <= UPPER_Z &&
      charCode - shift < UPPER_A
    ) {
      // uppercase wrap around
      const new_code: number = UPPER_Z + ((charCode - UPPER_A - shift + 1) % 26)
      result += String.fromCharCode(new_code)
    } else if (
      charCode >= LOWER_A &&
      charCode <= LOWER_Z &&
      charCode - shift < LOWER_A
    ) {
      // lower case wrap around
      const newCode: number = LOWER_Z + ((charCode - LOWER_A - shift + 1) % 26)
      result += String.fromCharCode(newCode)
    } else {
      result += String.fromCharCode(charCode - shift)
    }
    shift += 1
  }

  return result
}
