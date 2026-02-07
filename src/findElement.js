function findElement(arr,cb) {
  let elements = [];
  for (let num of arr) {
    if(cb(num)) {
      elements.push(num)
    }
  };
  if (elements.length === 0 ) {
    return [];
  } else {
    return elements;
  }
}
