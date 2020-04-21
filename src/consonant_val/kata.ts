// Write your source code here
const regex: RegExp = /[aeiou]/

export function mySplit(word: string) {
  word = word.toLocaleLowerCase()
  let arr: Array<string> = word.split(regex)
  //if two vowels next to each other there will be empty array slot
  arr = arr.filter((word) => word.length > 0)
  return arr
}

export function getValue(consonants: string) {
  const a: number = 'a'.charCodeAt(0) //returns 97
  const arr: Array<string> = consonants.split('')
  const values:Array<number> = arr.map((ch) => ch.charCodeAt(0) - a + 1)
  const value: number =
    values.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue
    )
  console.log(value)
  return value
}
export function consonantValue(word: string) {
  const consonants: Array<string> = mySplit(word)
  let max = 0
  for (let i = 0; i < consonants.length; i++) {
    const cur: number = getValue(consonants[i])
    if (cur > max) max = cur
  }

  return max
}
