const palindrome = require('../palindrome')

describe('palindrome()', () => {
  it('returns palindrome words', () => {
    expect(palindrome('madam')).toEqual(['madam'])
  })


  it('converts the given string to lowercase', () => {
    expect(palindrome('aba cbc')).toEqual(['aba', 'cbc'])
  })
  
  
})
