// fruits=["apple","orange","banana","mango"]
// //chaining nahi perform nahi kar sakate hai filter nahi perform kar sakate hai

// const myArr=fruits.map((curElem,index,arr)=>{
//    return `my fav fruit is ${curElem}`;
// });
// console.log(myArr);
// // for each loop value return nahi karata hai,sideefeect karane ke liye performing task or mod
// fruits.forEach((curElem,index,arr)=>{
//     console.log(curElem);
// });

// const arr=[5,1,3,2,6]
// const output=arr.map((x)=> x.toString(2));
// console.log(output);
const users=[
    {firstName:'akshay',lastName:'Saini',age:26},
     {firstName:'Utkarsh',lastName:'Kumar',age:26},
     {firstName:'Abhishek',lastName:'Chauhan',age:26},
     {firstName:'Rishabh',lastName:'Kumar',age:26},
    ]
    // const output=users.map((x)=>x.firstName+ " "+ x.lastName);
    // console.log(output);

 const output=users.filter((x)=>x.age>25).map((x)=>x.firstName+ " "+ x.lastName);//isi ko chaining kahate hai
 
 console.log(output);