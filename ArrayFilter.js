// const products = [
//     {
//       id: 1,
//       name: "Wireless Mouse",
//       category: "Electronics",
//       price: 25.99,
//       stock: 50,
//       rating: 4.5,
//       imageUrl: "https://example.com/wireless-mouse.jpg",
//     },
//     {
//       id: 2,
//       name: "Mechanical Keyboard",
//       category: "Electronics",
//       price: 79.99,
//       stock: 30,
//       rating: 4.8,
//       imageUrl: "https://example.com/mechanical-keyboard.jpg",
//     },
//     {
//       id: 3,
//       name: "Gaming Headset",
//       category: "Accessories",
//       price: 49.99,
//       stock: 20,
//       rating: 4.6,
//       imageUrl: "https://example.com/gaming-headset.jpg",
//     },
//     {
//       id: 4,
//       name: "Smartphone Stand",
//       category: "Accessories",
//       price: 12.99,
//       stock: 100,
//       rating: 4.3,
//       imageUrl: "https://example.com/smartphone-stand.jpg",
//     },
// ]
// const res=products.filter((curElem)=>{
//     return curElem.price>40;
// })
// console.log(res)
// const arr=[5,1,3,2,6]
// function isOdd(x){
//     return x%2
// }
// const output=arr.filter(isOdd);
// console.log(output);
const arr=[5,1,3,2,6]

const output=arr.filter((x)=>x>4);
console.log(output);