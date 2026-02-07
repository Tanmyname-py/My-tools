const mutation = (words) => {
   let status = "";
   const [word,mutation] = words;
   for (let m of mutation.toLowerCase() ) {
     for (let w of word.toLowerCase()) {
       if(w === m) {
         status += w;
         break;
         //status.push(true);
       }
     };
   };
  //console.log(status)
  //console.log(mutation)
   return status === mutation.toLowerCase() ? true : false;
};
