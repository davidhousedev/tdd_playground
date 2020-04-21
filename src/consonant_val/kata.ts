// Write your source code here

import { setupMaster } from 'cluster'
import { parse } from 'querystring'

export function my_split(word: string) {
  const regex: RegExp = /[aeiou]/
  word = word.toLocaleLowerCase()
  let arr: Array<string> = word.split(regex)
  //if two vowels next to each other there will be empty array slot
  arr = arr.filter((word) => word.length > 0)
  return arr
}

export function get_value(consonants: string) {
  const a: number = 96
  const arr: Array<string> = consonants.split('')
  const values = arr.map((ch) => ch.charCodeAt(0) - a)
  const value = values.reduce(
    (accumulator, current_value) => accumulator + current_value
  )
  return value
}
export function consonant_value(word: string) {
    const consonants: Array<string> = my_split(word)
    let max = 0
    for (let i = 0; i < consonants.length; i++) {
      const cur: number = get_value(consonants[i])
      if (cur > max) max = cur
    }
  
    return max

  }