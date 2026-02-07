function reverseString(word) {
  const wordsReverse = [];
  let lastIndex = word.length - 1;
  for (let i = 0; i < word.length; i++ ) {
    wordsReverse.push(word[lastIndex]);
    lastIndex--;
  };
  return wordsReverse.join("");
};
