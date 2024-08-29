function abc(a,b){
    if(a>b){
        console.log("First is Largest Number" + a);
    }
    else if (a<b){
        console.log("Second is Largest" + b);
    }
    else{
        console.log("Both are Equal" + a + ", " + b);
    }
}
//Arrow Function
abc(10,20);
let add = (a,b) =>  a+b;
console.log(add(2,4))
let mul = (a,b) =>  a*b;
console.log(mul(2,4))
// Scope in JavaScript
let a = [1,2,3,4,5,6,7,8,9,0,11,12,1];
console.log(a);