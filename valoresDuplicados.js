function valoresDuplicados (unArray){
  let otroArray = []
  
  for (i=0;i < unArray.length;i++){
    let indiceArray = unArray[i]
    if(otroArray.indexOf(indiceArray) === -1){
      otroArray.push(indiceArray)
    }
  }
  return otroArray
  }
  
  console.log(valoresDuplicados([1, 2, 2, 3, 4, 4, 5,8,7,1,6,3,7,10,999,998,998,999]))
        