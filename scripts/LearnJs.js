//alert('Hello world from external JS file');
//name="Pushpinder Kaur"; //a way to create a global variable (that can be accessed anywhere in the program)
//var name="Pushpinder Kaur";
//let name="Pushpinder Kaur"
//var name;//declaration

//name="Chris Hendry";// allocation/assignation of thr value to the variable
//alert(name);
//var age=25;
//console.log('Hello World');
//console.log(`Hello I am ${name}. I am ${age} years old.`);

//var isATrainee=true;
//Datatype in JS:
/*
Datatypes means what kind of data can be stored. In JS there are different datatypes:
1. string - collection of characters. String are represented as "string " or 'string ' and ` `-> template literal
2. number- integers, whole numbers, decimal, real, exponential, infinity , - infinty, NaN (Not A Number) etc..
3. boolean- true (1) or false (0)
4. undefined - which has nothing inside a variable.
5. null - null means no value. Null is derived from object type.
6. object- complex dataype. We can also have our own (custom ) object type. Eg: global object-> document, window, console
7. function - operation of the object. function is derived from object.
*/
/*console.log(`Type of ${name} is ${typeof name}`);
console.log(`Type of ${age} is ${typeof age}`);
console.log(`Type of ${isATrainee} is ${typeof isATrainee}`);
console.log(`Type of 1/0 = ${1/0} is a ${typeof (1/0)}`);
console.log(`Type of 1/'string' = ${1/'string'} is a ${typeof (1/'string')}`);
console.log(`Type of -1/0 = ${-1/0} is a ${typeof (-1/0)}`);
console.log(`Type of 'A'/0 = ${'A'/0} is a ${typeof ('A'/0)}`);*/

//Operators-> are the operations to be performed among the operands
/*
(binary- applied on 2 or more)
Arithmatic- +,-,/,*,% (modulus- gives you the remainder on division)
Logical Operator-
AND-&& : This is true only when both operands are true in condition else false for rest of it.
        Eg: T&&T= T
            T&&F= F
            F&&T= F
            F&&F= F

OR-||: This is false only if both the operands are false else it is true,
    Eg: Eg: T||T= T
            T||F= T
            F||T= T
            F||F= F
NOT-! : This is negation of existing value, !true becomes false and !false becomes true.
    Eg: !T= F
        !F= T
XOR-^ : This is false if both operands are same.
        Eg: T^T=F
            T^F=T
            F^T=T
            F^F=F

Eg: 10>13 != 15<17
      F    !=    T => T    
    !!!!false = (10*3)>(10+20)
    F = 30>30
    F = F
    T
Assignment- =, +=, -+,*=,/=
Comparison- >,<,>=,<=,==(equality- checks for on value),===(strict equality- checks for value as well as type)
(unary operators- applies to single variable)
- increment ++
    - post-increment - a++
    - pre-increment - ++a
- decrement --
    - post-decrement - a--
    - pre-decrement - --a
- not ! - negation
    !a
*/
/*var a=10;
var b=4;
var c;
var d="10";// string 10
var e=true;
c=a%b;
console.log(c)

// assignment operators
//a -=1;// a= a+1;
console.log(a);
//console.log((a==d));
console.log(10=='10');// true
console.log(10==='10');// false
// increment operator
console.log(a++); // ++a = a=a+1; incrementing the value by 1
console.log(a);
console.log(!e);

// to convert one type to another-> typecasting
console.log(10+'10');// number with string-> type is coerced as string
console.log('10'+10)
console.log(a+d);
console.log(typeof Number(d));
console.log(a+Number(d));// typecasting of variables

// Truthy and falsy
console.log(Boolean(d));
//falsy values- 0, false, "", null. undefined and NaN
console.log(Boolean(0));//false
console.log(false);//false
console.log(Boolean(""));//false
console.log(Boolean(''));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false

let x=5;
console.log(5%2); // returns 1

*/

// STRINGS
// NAMING CONVENTION WITH VARIABLES - use camelCase
//Other Cases involves : ProperCase, lowercase, UPPERCASE

let nameOfEmployee="Pushpinder";
nameOfEmployee += " Kaur";
console.log('string '+nameOfEmployee.toUpperCase() + ' has length '+ nameOfEmployee.length);
console.log(nameOfEmployee.charAt(3));

//CONSTANTS: whose value do not change;
// naming convention for CONSTANTS is UPPERCASE;
const PI= 3.14;
//PI="123";// this will give error as constants can't be re-assigned 
console.log(PI);

console.error("Error has occured");
console.warn("This is a warning but no harm ");

// PROGRAMS: in JavaScript
//1 . add 2 numbers and take input from users
let a,b;// declare 2 more variables in 1 line
//a=10; b=20;// Hard coded values
//instead of hardcoding try to take input from user using prompt dialog box
a=prompt("Please enter number 1 to be added");// with prompt the input comes in string format
b=prompt("Please enter number 2 to be added");
a= Number(a);// typecasting string to number
b= Number(b);
console.log(`sum of ${a} and ${b} is ${a+b}`);


