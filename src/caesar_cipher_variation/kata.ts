// Write your source code here

import { setupMaster } from 'cluster'

// upper case : 65 - 90
// lower case : 97 - 122

export function caesar_encode(message: string, shift: number) {
  const uc_A: number = 65
  const uc_Z: number = 90
  const lc_a: number = 97
  const lc_z: number = 122

  let result: string = ''

  for (let i: number = 0; i < message.length; i++) {
    let charCode: number = message.charCodeAt(i)
    if (message.charAt(i) == ' ') {
      result += ' '
    } else if (
      charCode >= uc_A &&
      charCode <= uc_Z &&
      charCode + shift > uc_Z
    ) {
      // uppercase wrap around
      const new_code: number = ((charCode - uc_A + shift) % 26) + uc_A
      result += String.fromCharCode(new_code)
    } else if (
      charCode >= lc_a &&
      charCode <= lc_z &&
      charCode + shift > lc_z
    ) {
      // lower case wrap around
      const new_code: number = ((charCode - lc_a + shift) % 26) + lc_a
      result += String.fromCharCode(new_code)
    } else {
      result += String.fromCharCode(charCode + shift)
    }
    shift += 1
  }

  return result
}

export function runners(message: string, shift: number) {
  let encoded = caesar_encode(message, shift)
  let runner_array: Array<string> = []

  let size: number = Math.ceil(encoded.length / 5.0)
  let length: number = encoded.length

  for (let i: number = 0; i < 5; i++) {
    if (size <= length && length != 0) {
      runner_array.push(encoded.substr(i * size, size))
      length -= size
    } else if (length != 0) {
      runner_array.push(encoded.substr(i * size, size - 1))
      length -= size - 1
    } else if (length == 0) {
      runner_array.push('')
    }
  }

  return runner_array
}

export function decode(encrypted: Array<string>, shift: number) {
  let result: string = ''
  const message: string = encrypted.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )

  const uc_A: number = 65
  const uc_Z: number = 90

  const lc_a: number = 97
  const lc_z: number = 122

  for (let i: number = 0; i < message.length; i++) {
    let charCode: number = message.charCodeAt(i)

    if (message.charAt(i) == ' ') {
      result += ' '
    } else if (
      charCode >= uc_A &&
      charCode <= uc_Z &&
      charCode - shift < uc_A
    ) {
      // uppercase wrap around
      const new_code: number = uc_Z + ((charCode - uc_A - shift + 1) % 26)
      result += String.fromCharCode(new_code)
    } else if (
      charCode >= lc_a &&
      charCode <= lc_z &&
      charCode - shift < lc_a
    ) {
      // lower case wrap around
      const new_code: number = lc_z + ((charCode - lc_a - shift + 1) % 26)
      result += String.fromCharCode(new_code)
    } else {
      result += String.fromCharCode(charCode - shift)
    }
    shift += 1
  }

  return result
}
