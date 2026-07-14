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