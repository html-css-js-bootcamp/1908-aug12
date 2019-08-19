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

let car= prompt('Enter your car for rental');
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
}