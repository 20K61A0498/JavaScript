//String Concatenation

let name1="Venkata"
let name2="Ramana"
console.log(name1+ " " +name2); // when we remove " "  then output print without spaces

console.log(name1[1])   // slicing also possible in java script /// in this line output is ===== e

console.log(name1.length)  //it give length of string 

console.log(name1.toUpperCase());// it conert lower case to uppr case
name3="RAMANA"

console.log(name3.toLowerCase());  //it convert upper case to lower

let result=name2.toUpperCase();
console.log(result)   // output turns to capital letters

let email="venkata498@sasi.ac.in"

let index=email.indexOf('@');
console.log(index)


let a=name2.slice(0,3);   //slice method  
console.log(a);   // prints rama

let b=name2.substring(0,3);  
console.log(b);

let name5="ramana"
c=name5.replace('a','o');  //replace only first letter a 
console.log(c);

///ARRAYS

let ram=['nar','ram','arj']
res=ram.length; //length of  array
console.log(res);
console.log(ram[1]);

//METHODS IN ARRAY
let ress=ram.join('-');
console.log(ress);

rse=ram.concat("sai","arjun");   //adding elements using concat operations
console.log(rse);

let r=rse.push("sai");
console.log(r);





let emai='palaganiramana77@gmail.com';
let resul=emai.includes('@');
console.log(resul);   // output is true --because @ is present in that 


//comparasion operators

let age=25;
console.log(age>=22);

// type conversion

let score=25;
console.log(score+1);
console.log(typeof score);

let resu=String(50);
console.log(resu,typeof result);





/// loops 


for(let i=0;i<5;i++)
{
    console.log('in loop :',i)
}
console.log('loop finished')



let n=['ram','siva','hemanth','narappa']
for(i=0;i<n.length;i++){
    console.log('in loop:',n[i]);
}



//while loop
i=0
while( i<5){
    console.log('in loop',i)
    i++
}


//conditional 

let ae=30;
if(ae>10){
    console.log('your are not a kid');

}

//local and global variables

let e = 30;
if(true){
    
    let e=40;
    console.log('after changing:',e);

}
console.log('outside block:',e)




var m = 30;
if(true){
    console.log('inside block age:',m);
    var m=40;
    console.log('after changing:',m);

}
console.log('outside block:',m)

console.log("rajesh");
console.log(10+20);
let raj="sssssrrrr";
console.log(raj);
raj=30;         
console.log(raj);


let firstname="venkat"; 
let secound="rajesh";  
console.log(firstname+secound); 
console.log(firstname.length);

raj="rajesh";
console.log(raj.indexOf('j'));
raj="rajeshssss";
console.log(raj.substring(3,3));
let s="rajesh";
console.log(s.substring(1,4));
console.log(s.replace('j','s'));
let ram=10;
console.log(ram+1);
console.log(typeof(s));

const spea=function(name){
    console.log(`hello ${name} mama`);

}
spea('ramana');




//functions

function greet(){
    console.log('hello world');
}
greet();


const speak=function(){
    console.log('hai');
}
speak();


// arrow function


let sum=(a,b)=>
    console.log(a+b);

sum(4,5);



sum=a=>
    console.log(a*a);

sum(4);

sum=a=>a*a;

console.log(sum(7));



let num=2+8
console.log(num)
console.log(num+2)

let user="Ramana's account"
console.log(user)
const pi=10
console.log(pi)
console.log(Number.MAX_VALUE *10)  

//String Concatenation

let name="Venkata"
let name2="Ramana"
console.log(name1);




