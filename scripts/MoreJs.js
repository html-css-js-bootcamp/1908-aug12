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
// if divisible by both 3 and 5 it should say fizzbuzz)

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

// FUNCTIONS: behavior of the program
// CONVENTION: verb, camelCase or ProperCase
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

// SHORTHAND OF ANONYMOUS FUNCTIONS-> ARROW FUNCTIONS:
// var arrowFuncRef= ()=> console.log('Hello Arrow functions');
// arrowFuncRef();

// FUNCTION with parameters
/*function add()
{
    let a= Number(prompt('Enter number 1'));
    let b= Number(prompt('Enter number 2'));
    console.log(a+b);
}
add();*/
function add(a,b){
    console.log(a+b);
}
let a= Number(prompt('Enter number 1'));
let b= Number(prompt('Enter number 2'));
add(a,b);