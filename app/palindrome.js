module.exports = sentence => {
  const words = sentence.split(' ')
  const palindromes = []
  words.forEach(word => {
    if(word.split('').reverse().join('') === word) {
      palindromes.push(word);
    }
  })
  return palindromes
}
