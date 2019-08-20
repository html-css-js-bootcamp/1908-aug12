console.info('first run');
/*if(10>13)//condition checkpoint
{
    //this is if block which runs only if the condition is true
    console.info("Condition is true");
}
else{
    console.info("Condition is not true");
}
//after if statements
console.log("outside if");*/

// Write a program to check ig a number is even or odd
/*
let num=Number(prompt('Enter a number to check even or odd'));
if(num%2 == 0){
    console.log(`${num} is even`);
    console.log('another line');
}
else
  
console.log(`${num} is odd`);// one line statements after if and else donot require braces
*/

// ELSE-IF used for multiple conditions
// write a program to grade students 
/**
 * 90>=  -A
 * 70-89 -B
 * 50-69 -C
 * 30-49 -D
 * <30 - fail
 */
/*let marks = Number(prompt('Enter your marks to check grades'));
    if(marks>=90)
        console.log('Your grade is A');
    else if(marks>=70 && marks<90)
        console.log('Your grade is B');
    else if(marks>=50 && marks<70)
        console.log('Your grade is C');
    else if(marks>=30 && marks <50)    
        console.log('Your grade is D');
    else
    console.log('Sorry you fail');*/
//HW
// write a program for fizz buzz in JS (numbers from 1 to 100, if number is divisible by 3 say fizz, if divisible by 5 say buzz and 
// if divisible by both 3 and 5 it should say  fizzbuzz)

/*function fizzbuzz(number){
    if(number>0 && number<101){
        if(number%3==0 && number%5==0)
            console.log('fizzbuzz');
        else if(number%3==0)
            console.log('fizz');
        else if(number%5==0)
            console.log('buzz');
        else
            console.log(number);
    }
}
let num=Number(prompt('Enter the number'));
fizzbuzz(num);*/

function fizzbuzz(){
//for(initialization;condition;increment/decrement)
    for(i=1;i<101;i++){
        if(i%3==0 && i%5==0)
        console.log('fizzbuzz');
    else if(i%3==0)
        console.log('fizz');
    else if(i%5==0)
        console.log('buzz');
    else
        console.log(i);
    }
}
//fizzbuzz();

// SWITCH - used for multi-condition checking but with matching pattern
/**
 * switch(expression)
 * {
 * 
 * case matching expression:
 *  //block to be checked upon
 * 
 * }
 */
/*let num=Number(prompt('Enter number for odd or even'));
switch(num%2)
{
    case 0:
        console.log(`${num} is even`);
        break;// break will not jump to next case if case is matched above
    case 1:
            console.log(`${num} is odd`);
            break;
}*/
/*let car= prompt('Enter your car for rental');
switch(car.toLowerCase()){
    case 'mazda' :
        console.log('You entered mazda and we have it');
        break;
    case 'camry' :
            console.log('You entered camry and we have it');
            break;
    case 'jaguar' :
            console.log('You entered jaguar and we have it');
            break;
    default :
            console.log(`You entered ${car} but we don't have it, sorry about it`);
            break;
}*/

// LOOPS:

/*let x=0;// initialization
// while(x>0 && x<=10)// first condition check
// {
//     console.log(x);
//     x++;// x=x+1
// }
do{
    console.log(x);
    x++;// x=x+1
}
while(x>0 && x<=10)// condition check after do block has executed
*/

// print numbers in reverse order

// let y=10
// while(y>0){
//     console.log(y);
//     y--;
// }
// while (true){
//     // this is infinite loop which never stops
//     // bad practise
// }

//print even numbers from 1 to 10

/*let a=1;
while(a>0 && a<11){
    if(a%2==0)
        console.log(a);
    a++;
}*/

// FOR LOOP:
// write a program in JS to write odd numbers from 1 to 100
// function printOdd(){
//     console.log("Printing odd numbers from 1 to 100");
//     for(var i=1;i<101;i++){
//         if(i%2==1)
//             console.log(i);
//     }
// }
//printOdd();
// Write a program in JS to print number in reverse order
// for(let i=100;i>0;i--){
//     console.log(i);
// }

// write a program in JS to print from -1 to -20 how we do it

// for(let i=-1;i>-21;i--){
//     console.log(i);
// }

                //or
// for(let j=-20;j<0;j++){
//     console.log(j);
// }

//
// FUNCTIONS: behavior of the program
// CONVENTION: name it as a verb, camelCase or ProperCase
// Named Function
/*function sayHello()// declaration
{
    //body or definition of the function
    console.log('Hello');
}

// call/invoke function
sayHello();
sayHello();//once function is created can be called any number of times
sayHello();
sayHello();
*/

// function inside a variable
/*var wishHello=function sayHello()
{
    console.log('Hello');
}
console.log(wishHello);// this prints function definition because variable wishHello holds the reference of sayHello function
wishHello();*/

// anonymous function - a function with no name and only for single use
/*var anonymousFunctionRef=function(){
    console.log('Hello anonymous');
}
anonymousFunctionRef();*/

// SHORTHAND OF ANONYMOUS FUNCTIONS IN ES6-> ARROW FUNCTIONS:
// var arrowFuncRef= ()=> console.log('Hello Arrow functions');
// arrowFuncRef();

// ARROW FUNCTIONS WITH PARAMETERS:
// var add=(a,b)=>console.log(a+b);
// add(30,60);

/*var isEven=(num)=>{
    if(num%2==0)
        console.log(`${num} is even`);
    else
        console.log(`${num} is odd`);
};
isEven(5);*/
// FUNCTION with parameters- to make function modular
/*function add()
{
    let a= Number(prompt('Enter number 1'));
    let b= Number(prompt('Enter number 2'));
    console.log(a+b);
}
add();*/
/*function add(a,b){
    console.log(a+b);
}
let a= Number(prompt('Enter number 1'));
let b= Number(prompt('Enter number 2'));
add(a,b);*/

//FUNCTION THAT RETURNS A VALUE
 // Named Function
    // function add(a,b){
    //     return a+b;
    // }

    // function isEven(num){
    //     if(num%2==0)
    //         return true;
    //     else
    //         return false;
    // }
    // var checkEven=isEven(7);
    // console.log(checkEven);

// Anonymous functions
    // var add=function(a,b){
    //     return a+b;
    // }

    // var isEven=function(num){
    //     if(num%2==0)
    //         return true;
    //     else
    //         return false;
    // }
    // var checkEven=isEven(70);
    // console.log(checkEven);

//Arrow functions
    // var add=(a,b)=>a+b;
    // var result=add(10,40);
    // console.log(result);

    // var isEven=(num)=>{
    //     if(num%2==0)
    //         return true;
    //     else 
    //         return false;
    // }
    // var checkEven=isEven(65);
    // console.log(checkEven);

//CALLBACK FUNCTIONS:
var testScope='global';
//console.log(testScope);
function showFullName(firstName,middleName,lastName){
   // console.log(testScope);
   funcScope='function scope';// not accessible outside function
   {
       //another block in function
       let blockScope="block scope";// var has a function scope and let has block scope
   }
   console.log("inside function -> outside block "+blockScope);
    if(middleName!="" || middleName!=null || middleName!==undefined){
       // console.log("inside function -> if block "+funcScope);
        return `${firstName} ${middleName} ${lastName}`;        
    }
    else{
        console.log("inside function -> else block "+funcScope);
        return `${firstName} ${lastName}`;
    }    
}

// {    //block scope
//     let blockScope2='another block scope';
// }
//console.log("outside block "+blockScope2);// with var it is accessible but not with let
//console.log("outside function "+funcScope);// this is not accessible because of function scope

function show(callback){
    //console.log(testScope);
    let fName=prompt('Enter your first name');
    let mName=prompt('Enter your middle name');
    let lName=prompt('Enter your last name');
   console.log(callback(fName,mName,lName));
}
//debugger;
//show(showFullName);
//console.log(testScope);
//IIFE functions - declared and called immediately
            // Callback function
     
            //vvv
/*(function show(callback){
    let fName=prompt('Enter your first name');
    let mName=prompt('Enter your middle name');
    let lName=prompt('Enter your last name');
   console.log(callback(fName,mName,lName));
})(showFullName);
*/

//SCOPES: life-time of JavaScript object (Every datatype in JS is directly or indirectly inherited from Object)
/**
 * Global Scope -> this mean it can be accessed anywhere outside program as well. They are not secure as they
 *                  are accessible any where
 * Local Scope -> they more restricted than function scope
 *  - Block Scope -> accessible only with in the block {} , but outside {} they are not accessible.
 *              Typically let keyword (ES6) restricts a variable to block scope.
 *  - Function Scope -> they are accessible anywhere with in the function (parameters etc...) but outside function
 *                  they are not accessible
 */

 //most restrictive to least restrictive => block scope=>function scope=>global scope


 // ARRAYS : they are derived from object type
 //ar students=[];//empty Array 
 var students=['Chris','Nick','Evie','Omid'];
 //console.log(` Type of students ${typeof students}`);
 //console.log(`length of students' array ${students.length}`); // returns size of the array
 // return first element
 students[0]='Christopher Hendry';// change the value
 students.push('Justin');
 students.push('Min'); // adds a new element from the end
 students.pop();// remove an element from the last
 students.unshift('Tim');// inserts element from the start
//console.log(students[0]);
//console.log(students[1]);// first element of array
//console.log(students[students.length-1]);// last element of array

//read all elements of array
// for(var s=0;s<students.length;s++){
//     console.log(students[s])
// }

//read elements of arrays in reverse order
// for (let i = students.length-1; i >=0 ; i--) {
//     console.log(students[i]);    
// }

// find the maximum number/marks from the array
/*var marks=[56,67,87,89,90,78];
 function findMax(arr){
     debugger;
     var max=0;//temporary variable to hold max value
     for(let i=0;i<arr.length;i++){
        if(arr[i]!=undefined && arr[i+1]!=undefined){ 
        if(arr[i]>arr[i+1]){
            max=arr[i];
        }
        else{
            max=arr[i+1];
        }        
       }
     }
     return max;
 }
 var maxNumber= findMax(marks);
 console.log(maxNumber);
*/

//OBJECTS:
//var car={};// first step to create an object, empty object
/*var car={
    //static states
    make: 'mazda',
    model:'6',
    year:'2016',
    chasisNumber:'1234567',
    //dynamic states
    speed: 70,
    mileage: 15.6,
    //behaviour -> methods (functions in an object)
    transport:function(){
        console.log('it is a 4 seater sedan car which is comfy and economic in usage');
    },
    getInfo:function(owner){
        return `This car ${car.make}-${this.model} belongs to ${owner} has chasis no. ${this.chasisNumber}. It is ${this.year} model has a mileage of ${this.mileage}`;
    }//this keyword points to current object which is car
}
console.log(typeof car);
console.log(car.make);// dot notation to access the object members
car.transport();// call method of the object car
car.chasisNumber='9876543';// change the value
console.log(car['year']);// bracket notation
console.log(car.getInfo('Pushpinder Kaur'));
*/

// create an object for Employee

/*var employee={
    id:123,
    name:{
        firstName:'Tim',
        middleName:'H',
        lastName:'ortons'
    },
    role: 'Manager',
    basicSalary:9000.00,
    hra:2000.00,
    medical: 200,
    ta:500,
    getSalary:function(){
        return this.basicSalary+this.hra+this.ta-this.medical-.3*this.basicSalary
    },
    bio:function(){
        return `Emp Id - ${this.id}, Name - ${this.name.firstName} ${this.name.middleName} ${this.name.lastName}, role - ${this.role}, salary - ${this.getSalary()}`;
    }
}

console.log(employee.name.firstName);
console.log(employee.bio());*/

// EVENTS : User action Eg: click, hover, change, blur, keypress, keyup, keydown etc....

// DOM Manipulation
function addToList(){
    var list=document.getElementById('list');
    var li=document.createElement('li');
    li.textContent='DOM Manipulation';
    list.appendChild(li);
}
//addToList();// direct function call

var btnAdd=document.getElementById('btnAdd');

// Binding event to event listener
//event         event listner/ even handler
//vvv            vvvv
//btnAdd.onclick=addToList;

btnAdd.addEventListener('click',addToList);
