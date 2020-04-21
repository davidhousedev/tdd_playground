// Write your tests here
import { caesar_encode } from './kata'
import { runners } from './kata'
import { decode } from './kata'

describe('caesar cipher variation encode', () => {
  it('encodes with no wrap around', async () => {
    expect(caesar_encode('abc', 1)).toEqual('bdf')
  })

  it('encodes with capital letter wrap around', async () => {
    expect(caesar_encode('adZ', 1)).toEqual('bfC')
  })
  it('encodes with lower letter wrap around', async () => {
    expect(caesar_encode('aady', 1)).toEqual('bcgc')
  })
  it('handles spaces', async () => {
    expect(
      caesar_encode(
        'I should have known that you would have a perfect answer for me',
        1
      )
    ).toEqual('J vltasl rlhr zdfog odxr ypw atasl rlhr p gwkzzyq zntyhv lvz wp')
  })
})

describe('caesar cipher divide amongst runners', () => {
  it('divides evenly amongst runners (5)', async () => {
    expect(runners('aaaaa', 1)).toEqual(['b', 'c', 'd', 'e', 'f'])
  })
  it('divides evenly amongst runners (10)', async () => {
    expect(runners('aaaaaaaaaa', 1)).toEqual(['bc', 'de', 'fg', 'hi', 'jk'])
  })
  it('divides unevenly amongst runners (11)', async () => {
    expect(runners('aaaaaaaaaaa', 1)).toEqual(['bcd', 'efg', 'hij', 'kl', ''])
  })
  it('divides unevenly amongst runners (16)', async () => {
    expect(runners('aaaaaaaaaaaaaaaa', 1)).toEqual([
      'bcde',
      'fghi',
      'jklm',
      'nopq',
      '',
    ])
  })
  it('divides unevenly amongst runners (17)', async () => {
    expect(runners('aaaaaaaaaaaaaaaaa', 1)).toEqual([
      'bcde',
      'fghi',
      'jklm',
      'nopq',
      'r',
    ])
  })

  it('handles spaces', async () => {
    expect(
      runners(
        'I should have known that you would have a perfect answer for me',
        1
      )
    ).toEqual([
      'J vltasl rlhr',
      ' zdfog odxr y',
      'pw atasl rlhr',
      ' p gwkzzyq zn',
      'tyhv lvz wp',
    ])
  })
})

describe('decode', () => {
  it('decodes an encoded array', async () => {
    expect(
      decode(
        [
          'J vltasl rlhr',
          ' zdfog odxr y',
          'pw atasl rlhr',
          ' p gwkzzyq zn',
          'tyhv lvz Wp',
        ],
        1
      )
    ).toEqual('I should have known that you would have a perfect answer for Me')
  })
})
