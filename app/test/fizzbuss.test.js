const fizzbuzz = require('../fizzbuzz')

describe('fizzbuzz()', () => {
  it('returns "FizzBuzz" for multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
    expect(fizzbuzz(30)).toBe('FizzBuzz')
  })
  it('returns "Fizz" for multiples of 3', () => {
    expect(fizzbuzz(9)).toBe('Fizz')
  })
  it('returns "Buzz" for multiples of 5', () => {
    expect(fizzbuzz(50)).toBe('Buzz')
  })

  it('returns given number if not a multiple of 3 and 5', () => {
    expect(fizzbuzz(4)).toBe(4)
  })
})
