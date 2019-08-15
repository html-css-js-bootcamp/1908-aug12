//alert('Hello world from external JS file');
//name="Pushpinder Kaur"; //a way to create a global variable (that can be accessed anywhere in the program)
//var name="Pushpinder Kaur";
//let name="Pushpinder Kaur"
var name;//declaration

name="Chris Hendry";// allocation/assignation of thr value to the variable
//alert(name);
var age=25;
//console.log('Hello World');
console.log(`Hello I am ${name}. I am ${age} years old.`);

var isATrainee=true;
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
Logical- &&,||,!
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
var a=10;
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
console.log(Boolean(0));
console.log(false);
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));