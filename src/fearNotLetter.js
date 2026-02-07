function fearNotLetter(word) {
  const alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let startIndex = alfabet.indexOf(word[0]);
  for( let i = 0; i < word.length; i++) {
   // console.log(i);
    //console.log(startIndex);
    if(word[i] !== alfabet[startIndex]) {
      return alfabet[startIndex]
    } 
    startIndex++;
  }
  return;
};
