const persons=["ram","shyam","hari","gita"];
// persons.push("sita");
// console.log(persons);
// persons.pop('shyam');
// console.log(persons);
// console.log(persons.unshift("sita"));
// console.log(persons);
// console.log(persons.shift());       

persons.splice(1, 1,"rishabh");/*splice[start,deletecount,item1,item2,item3]*/
persons.indexOf("hari");/*indexOf(searchvalue,fromindex)*/
// console.log(persons);
persons.includes("hari");/*return karata hai true aur false*/
console.log(persons);
//includes vali jo cheez hai vo hamesa true/false retuen karati hai 
