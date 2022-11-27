#! /usr/bin/env node
console.log("hello");
let var1;
console.log(var1);
// any type example
type Obj = {
    n1 : string,

}
let obj: Obj = {n1: "number1"};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// // obj.bar = 100;
// // obj = "hello";
const n: string = obj.n1;
console.log(n);
// litrals
let num1 : "hello" | "world" | number | string;
num1 = 5;
num1 = "anam";
let student : { name : string};
let num2 : 1 | 2;




