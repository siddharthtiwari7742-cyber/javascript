//conversions
let score ="33abcc";
console.log(score);

let scoreinnumber=Number(score);
console.log(typeof scoreinnumber);
console.log(scoreinnumber);// this will give NaN which means not a number evven thoguh type shpws it is a number but it isn't 

let scoreinbool=Boolean(score);
console.log(typeof scoreinbool);
console.log(scoreinbool);// when string is nonempty it is true else false 

let value = null;
console.log(Number(null))

let val= undefined;
console.log(Number(val));

//-----------------------------Operations--------------------------------------------------------------------------
console.table([2+10,2-5,6*2,"siddh "+"hello"]);
// ajeeb si chije  hongi ab
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
//-------------------------summary of dataypes-----------------------------------------------------------------------
// primitive->String, number ,boollean , null(this is not same as 0), undefined(value not yet given ),symbol(used to make something unique)
//these are call by vale that is their  copy is passed instead of reference but for non primitve referenceis passed 
//non-primitive called by reference-> array, objeccts , function
const id =Symbol('123');
const another_id=Symbol('123');
console.log(id===another_id);
// even though same string was passed their Symbol is not same 
const arr=['Panner','Chole','pizza'];//
const myobj={
    name:"sidd",
    age:18,
}
const func=function(){
    console.log("hello world");
}
//typeof null &non primitve datatype ka object aaata , 
// function ka function object hotta though dikhata function hai 
//undefined ka undefined hotta 
//baaki dataype string number symbol ye sab aate 


//----------------Lecture10-----------------------------------------
// primitve->stack(call by copy), non-primitve->heap(calll by reference)
let myname="Siddharth";

let anothername=myname;
anothername="Siddhu";

console.log(myname);
console.log(anothername);

let user1={
    name:"Siddharth",
    id:1
}
let user2=user1;
user2.id=2;
console.log(user1);
console.log(user2);
