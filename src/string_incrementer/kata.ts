// Write your source code here

import { setupMaster } from 'cluster'

export function my_split(splitee: string) {
  const regex1 = /\d/
  const regex2 = /[^0]/
  const regex3 = /\D/

  //word
  let word: string = splitee.split(regex1)[0]
  //zeros
  const arr1 = splitee.split(regex2)
  let zeros: string = arr1[arr1.length - 2]
  //number
  const arr2 = splitee.split(regex3)
  let num: string = arr2[arr2.length - 1]

  word += zeros
  return [word, num]
}

export function string_incrementer(append: string) {
  if (isNaN(parseInt(append[append.length - 1], 10))) {
    return (append += '1')
  }

  let arr:Array<string> = my_split(append)
  let num: number = parseInt(arr[1],10)
  num += 1

  return (arr[0]+num)
}
