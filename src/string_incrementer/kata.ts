// Write your source code here

import { setupMaster } from 'cluster'

export function string_incrementer(append: string) {
  if (isNaN(parseInt(append[append.length - 1]))) {
    return (append += '1')
  }

  var index: number = 0
  while (isNaN(parseInt(append[index])) || parseInt(append[index]) == 0) {
    index += 1
  }

  //return append.substring(0,index)
  var num: number = parseInt(append.substring(index))
  num += 1
  append = append.substring(0, index) + '' + num

  return append
}
