/*  let num=6
console.log(num,typeof num); //return type of number  */

let num=String(6)    // now 6 is stored as string format

console.log(num ,typeof(num));  // returns type is string

let va=Number("ramana")     //java script is a case sensitive
console.log(va,typeof(va))  // not return ramana output get ====NaN  number




num="ramana"
van="venkata"

console.log(num + " " + van);    // adding of two strings output is =====ramana venkata

// .........    coercion   ..........

let x
console.log(x,typeof(x));    // returns type= number    output=8
x=8
console.log(x,typeof(x));     //  returns type= number   output=8
x=x+''
console.log(x,typeof(x));     //   returns type= string output=8
x=x-2
console.log(x,typeof(x));     //    returns type= number  becuase when minus operator come then it will take automatically string to number   output= 8-2 =6


x=!x
console.log(x,typeof x);  // false 

console.log(Boolean(7));  // true




//String Concatenation

let name1="Venkata"
let name2="Ramana"
console.log(name2+name1);



