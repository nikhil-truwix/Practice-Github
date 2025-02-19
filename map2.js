const numbers=[1,2,3,4,5]
const result=numbers.map((num)=>{
    if (num%2==0){
        return num*num  /*ye undefined return karega*/
    }
    })
       .filter((num)=>num!=undefined);
       console.log(result);