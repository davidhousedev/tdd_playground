// Write your source code here

export function mySplit(splitee: string='') {
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

export function stringIncrementer(append: string = '') {
  if (isNaN(parseInt(append[append.length - 1], 10))) {
    return (append += '1')
  }

  const arr: Array<string> = mySplit(append)
  let num: number = parseInt(arr[1], 10)
  num += 1

  return arr[0] + num
}
