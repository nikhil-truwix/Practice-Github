array=[21,2,12,7,31]
array.sort((a,b)=>{
   if (a>b){
       return 1
   }
    if (a<b){
        return -1
    }
})
console.log(array);