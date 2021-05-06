//  javascript basics documentation 
// variables 
let name='im sai'
console.log(name);
// rules: cannot be reserved words
// should be meaningfull
// Cannot start with a number (1name)
// cannot contain a space or hyphen(-)
//are case-sensitive
//camel notation
let firstName="sai";
let lastname='sid';


//constants we use const
const interestRate=0.3;
//interestRate=1;// if u need to reasign a variable use let
console.log(interestRate);
//value of a constant cannot change


/* In java script we have two categories of types 
    : 1) Primitive/value types:> Strings , Numbers, Booleans, Undefined, Null.
    2) Reference Types : */

let Name="sai"; //string Literal
let age=30;//Number Literal
let isApproved=true;//boolean Literal(used in logics)
let firstNameme=undefined;//undifined is actually a type and a value
let lastName=null;
let selectedColor=null;//used to explicitily clear value of variable

//DYNAMIC TYPING 
// JS is a Dynamic language
// explaination we have two types of languages static languages and dynamic languages
//static-type of a variable cant be changed
//Dynamic-type of a variable can be changed at run time
//typeof operator - we can chech the type of a variable


// REference types : Objects , Arrays , Functions .
//Object : an object in a programming languages is like an object in real life 
// > Think of a person > a person has name age address and so on there are the properties of a person.
//When we are dealing with multiple related variables , we can put these variables inside an object
//example:
/*let name= 'sai';
let age =21;*/
//object declaration :
let person = {
    name:'sai',
    age:21
};
console.log(person);
//tochange name of the person 
//Dot Nation >important used to access properties and change or update them
person.age=22;
console.log(person.age);
//Bracket Notation 
//other way of accessing property
//use square brackets instead of dot
person['name']='Sid';
console.log(person.name);
//selection type other way 
let selection='name';
person[selection]='sid';



//ARRAYS -list of objects
//ex:list of products in shopping list
// we use ARRAY to store that list
//example:
let selectedColors= ['red','blue'];
selectedColors[2]=1;//length and objects are dynamic.
console.log(selectedColors.length);
//to access elements in array we use index 
//example:
console.log(selectedColors[0]);
// we can add another element to array on line 72 as js is dynamic 
//an array is an object in javascript
//An array is a DATA STRUCTURE  that we use to represent a list of items


//FUNCTIONS 
//functions are fundamental building blocks in JS
/* a function is a set of statements that performs a task or calculates a value */
//example:
//Performing a task
function greet(name,lastName/*parameter*/) { 
    console.log('hello '+ name +' '+ lastName);     //body of this function
}
//calling above function
greet('sid','Charan'/* argument */); //Argument is actual value of parameter

//Calculating a number using function
function square(number){
    return /*reserved keyword*/number*number;
}
let number/*declaring a variable */ = square(2);
console.log(square(2));
//function is a set of statements that performs a task or calculates a number
