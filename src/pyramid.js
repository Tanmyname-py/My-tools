const pyramid = (patern,row,type) => {
  let pyramid = "";
  if(!type) {
  for ( let i = 0; i < row; i++ ) {
    for(let k = 0 ; k < ( row - (i+1) ); k++) {
      pyramid += " ";
    }
    for(let j = 0; j < ( 2 * (i + 1 ) - 1 ); j++ ) {
      pyramid += patern
    }
    pyramid += "\n"
  } 
  } else {
    for ( let i = row; i > 0 ; i-- ) {
     // console.log(i);
    for(let k = 0 ; k < ( row - i ); k++) {
    pyramid += " ";
    }
    for(let j = 0; j < ( 2 * i - 1 ); j++ ) {
      pyramid += patern
    }
    pyramid += "\n"
  } 
  }
  return "\n" + pyramid;
}

console.log(pyramid("*",20,true));

/*


***o
**ooo
*ooooo
ooooooo


ooooooo
*ooooo
**ooo
***o
*/
