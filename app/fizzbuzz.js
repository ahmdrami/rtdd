module.exports = num => {
  let word = ''
  if (num % 3 === 0) {
    word += 'Fizz'
  }
  if (num % 5 === 0) {
    word += 'Buzz'
  }

  return (word && word) || num
}
