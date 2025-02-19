/*Write a Javascript function that calculates total price of items in a shopping Cart. The function accepts a parameter which is an array of objects. Each object in the array has a quantity and price property. The function should accept total price of items in shopping cart.The function should take an array of objects and return total price of items in shopping cart.*/
const prices=[100,200,300,400]
const result=prices.reduce((total,price)=>{/*jo price hai ye current value ko represent karata hai*/
    return total + price;
},0);
console.log(result);