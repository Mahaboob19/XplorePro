//literals
let arr = [10,20,30,40,50];
console.log(arr);

//using new keyword
let skills = new Array(10,20,30,40,50);
console.log(arr);

//Array Inbuild Fn.
let price = [10,20,30,40,50];
price.push(77); // Insert new elements in the last index
price.push(...skills); //From ES6
price.pop(); //remove last element in array
price.unshift("Hello","hi",20, 30.5); //insert new elements at first
price.shift(); //remove first element in an array
price.splice(0, 4); //takes the parameters 1. start and 2. count and is used to delete some elements
price.splice(5,0,"java",30); //add elements from the index (5)
price.splice(1,n-2,"JS"); // use to replace upto that part
price.slice(1, 4); //Will not effect original array and used to fetch
price.reverse(); // used for reverse of an array
price.sort(); //used to sort



let arr1 = [9, 12, 34, 40, 50, 55];
//for-in loop arrays/strings
for(idx in arr1){
    console.log(idx);
}
//for-of loop arrays/strings
for(val of arr1){
    console.log(val);
}
//for-each loop
arr1.forEach((val, idx, newArr) => {
    console.log(val,"->",idx,"->",newArr);
});

//map function
let disArray = arr1.map((x) => {
    return x - x/10;
});
console.log(disArray);

let gstArray = arr1.map((x) => {
    return x + x*0.08;
});

//filter function
const filtArray = disArray.filter((x) => {
    return x>=50 && x<=100;
});
console.log(filtArray);

//reduce
const totalPrice = price.reduce((acl, val) => {
    return acl+val;
});
console.log(totalPrice);