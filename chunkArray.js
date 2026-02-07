const chunkArrayInGroups = (arr,group) => {
    let idx = 0;
    let chunkArray = [];
    for(let i = 0; i < arr.length / group ; i++) {
        //console.log(i)
        chunkArray[i] = []
        for (let j = 0; j < group; j++)  {
            idx ++;
            //console.log(j)
           // console.log(i);
            if(arr[idx -1] + 1) {
              chunkArray[i][j] = arr[idx - 1];
            } 
        };
    };
    return chunkArray;

};
