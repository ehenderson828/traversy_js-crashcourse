// Javascript variables: var, let and const -- let and const have a block level scope

// let is a variable in which the value can be changed

let age = 30;
age = 31;

console.log(age); // Will return 31 as we changed the variable

// Generally speaking, always use CONST unless you know that you will change the value

// Javascipt datatypes: string, numbers, boolean, null, undefined & symbol

const name = 'John'; // String
const age = 30; // Number
const rating = 4.5 // Decimal (still a number, not a float)
const isCool = true; // Bool
const x = null; // null (empty)
const y = undefined; // undefined
let z; // Simply declaring a variable is acceptable as undefined, but you must use 'let'

console.log(typeof name);

    // Concatenation:

    // Old method (wrong/old way):
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');

    // Template string (right way):

    console.log(`My name is ${name} and I am ${age} years old.`);


// String properties and methods:

const s = 'Hello, world!'

// Want to get the amount of characters in a string, use the length property:

console.log(s.length); // In JS, METHODS have parenthesis while PROPERTIES do not.

// METHODS are functions that are associated with an object

// To uppercase method:

console.log(s.toUpperCase());

// To lower case method:

console.log(s.toLowerCase());

// Sub string method:

console.log(s.substring(0,5)); // 0 & 5 (arguments) are the indexes that select which part of the string to pull out

    // You can also combine the use of two or more methods, AKA chaining:

    console.log(s.substring(0,5).toUpperCase());

// Split method:

console.log(s.split('')); // This method will split a string into into an array of characters. A string with 13 characters produces a array with 13 members.

    // You use use that same method to ignore particular characters:

    console.log(s.split(', '); // This argument would create an array of just words. You can use this for tag lists (hash tags).



// Arrays: variables that hold multiple values:

// Array constructor method (uncommon):

const numbers = new Array(1,2,3,4,5); // The word 'new is our constructor

console.log(numbers);

// Brackets method (common):

const fruits = ['oranges', 'apples', 'grapes', 'watermelon'];

console.log(fruits);

    // JS also allows arrays to be declared with multiple data types:

    const birds = ['blue_jay', 'chickadee', 5, false, null];

    // To accessa a single member of an array, we need to use bracket notation to indicate which member has been selected:

    const sports = ['football', 'baseball', 'basketball', 'hockey', 'rugby'];

    console.log(sports[0]); // This would post football to the console since football is at position 0 in the array

        // Members can be added onto existing arrays:

        const sports[5] = 'soccer';

        console.log(sports); // Will print all elements including 'soccer'

        // If you're not certain how many members an array has, ypu can always use the PUSH method;

        sports.push('tennis'); // This will add a member regardless of how many there are, at the end

        // Adding a member at the beginning of an array requires the UNSHIFT method:

        sports.unshift('kickball');

    // Arrays are generally fexible, but you cannot reassign an array once you have declared it as a const:
    
    const animals = ['pig', 'cow', 'sheep'];

    animals = []; // This will not fly (reassignment)

    // Removing the last member of an array is easy with the POP method:

    animals.pop(); // This will remove sheep from the array

    // To test whether or not a variable is an array, use the isArray function:

    console.log(Array.isArray(animals)); // This will return a bool that confirms true or false

    // To find the index (position) or a given member, use the indexOf method:

    console.log(animals.indexOf(pig)); // This should return 0, as pig is at position 0

// Key value pairs (dictionaries in python, and or data structures) are known as object literals in JS:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'] // You can declare an array as an object literal
    address: { // This is known an an embedded object
        street: '150 Main Street',
        city: 'Boston',
        State: 'MA'
    }
};

console.log(person); // This will show us all of the values in the console

    // To access a single value, we can use dot syntax

    console.log(person.lastName);

    // You can also add a comma, and access more that one value:

    console.log(person.firstName, person.lastName);

    // To access a member of an array inside of an object literal, you need to name it's position:

    console.log(person.hobbies[1]); // This will return 'movies'

    // To access a value inside of an embedded key-value pair, we need to use dot notation twice:

    console.log(person.address.city); // This will return 'Boston'




    // If you want to retrieve the values of an object literal as a variable, you can use DESTRUCTURING (advanced):

const { firstName, lastName } = person; // This is not assignment, it's extraction

console.log(firstName); // This will return 'John'

    // If you want to destructure an embedded object:

    const { address: { city } } = person; // This will return 'Boston'

// You can also add properties to an existing object:

person.email = 'john@gmail.com';

console.log(person.email);

// You may also encounter arrays of object literals:

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos); // This will return an array with 3 values, all of which are objects

    // If you want to print out a specific property within a specific member, you need to name the position and the property:

    console.log(todos[1].text); // This will return 'Meeting with boss'






    // JSON (JavaScript Object Notation) (pronounced 'Jason') files are used to send complex data struction (like our object literals) from front ends to back ends (servers).

// We can use the following method to prepare an object literal to be sent to a server:

const todoJSON = JSON.stringify(todos);

console.log(todoJSON); // This will return a string of our structure in JSON format




// Loops: 

// For loops: for (parameter; condition; increment){};

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Loops run until their condition is met, or that condition becomes true

        // We can also use template strings

        for (let i = 0; i <= 10 (); i++) {
            console.log(`For loop number: ${i}`);
        }

// While loops:

let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++; // If you do not add the increment, the loop will run forever
}

// We can also loop through arrays:

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// for of loops (very readable, easy to understand):

for (let todo of todos) {
    console.log(todo.id);
}

// High order array methods (best way to iterate through arrays): 

    //forEach (performs specified action for each member of an array):

    todos.forEach(function(todo) { // function (callback function) is going to take a variable (todo) for each iterated item
        console.log(todo.text);
    });

    // map (returns an array): 

    const todoText = todos.map(function(todo) {
        return todo.text;
    });

    console.log(todoText); // Returns an array of just the text properties

    // filter (returns an array of properties that meet the condition in the callback function):

    const todoCompleted = todos.filter(function() {
        return todo.isCompleted === true;
    });

    console.log(todoCompleted); // Returns an array of the elements with completed todos

        // You can also chain together two high order array methods:

        const todoCompleted = todos.filter(function() {
            return todo.isCompleted === true;
        }).map(function(todo) { // We chained in the map method
            return todo.text;
        });

        console.log(todoCompleted); // This will return the text elements that also match out filter condition



// Conditionals:

const x = 10;

if (x == 10) { // '==' matches values (i.e. -- '10' is to 10), while '===' matches data types (strings cannot be equivalent to numbers)
    console.log('x is 10'); // Traversy prefers to always use triple equals
} 
else if (x > 10){
    console.log('x is greater than 10')
}
else {
    console.log('x is not greater than 10');
}

    // Conditionals can also contain multiple conditions via 'or' (||) syntax:

    const x = 5;

    const y = 10;

    if (x > 5 || y > 10) { // When we use the 'or' syntax, this runs when at least one of these conditions are true
        console.log('X is more than 5 or y is more than 10');
    }

    // Whereas...

    const x = 6;

    const y = 11;

    if (x > 5 && y > 10) { // When we use the 'and' syntax, this runs only when both conditions are true
        console.log('X is more than 5 or y is more than 10');
    }

// Ternary operators are shorthand 'if' statements. They're used a lot to assign variables based on a condition: 

const x = 10;

const color = x > 10 ? 'red' : 'blue'; // The ternary operator here is '?' (then). ':' represents 'else'

console.log(color); // This would return blue, as x is not greater than 10

// Switches are another way to evaluate a condition

const x = 10;

const color = 'green';

// Let's evaluate the color with a switch

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

// Functions:

// You can create your own:

function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5, 4); // Should return 9

    // You can also set default parameters:

    function addNums(num1 = 1, num2 = 1) {
        console.log(num1 + num2);
    }

    addNums(); // Because the default has been set, you will get a return value of 2

        // You can then overwrite said defualts:

        function addNums(num1 = 1, num2 = 1) {
            return num1 + num2;
        }

        console.log(addNums(4, 4)); // Return value of 8

// Arrow functions are a compact alternative to traditional functions:

const addNums(num1 = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNums(5, 5)); // Return value of 10






// OBJECT ORIENTED PROGRAMMING:::

// We can construct objects with constructor functions:

// The 'this' keyword allows us to acces the objects properties

// Constructor function:
function Person(firstName, lastName, dob) { // Constructor functions must start with capital letter. Need to pass in the properties you want to set
    this.firstName = firstName; // This is the value that is passed into the function call
    this.lastName = lastName;
    this.dob = new Date (dob); // Using that new keyword, we're formatting this as a date. and not a string
    this.getBirthYear = function() { // We can also add methods to objects like this
        return this.dob.getFullYear();
    }
    this.getFullName = function() { // 
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object with the created constructor function:

const person1 = new Person('John', 'Doe', '4-3-1980'); 
const person2 = new Person('Mary', 'Smith', '1-7-1970');

console.log(person1.dob);

console.log(person1.getBirthYear()); // Returns 1980 in date form, just the year, not the month or day

console.log(person1.getFullName()); // Returns first and last name



// PROTOTYPES:::

// When we log a constructed object, we do not want to view each property name, so... We use a prototype:

function Person(firstName, lastName, dob) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.dob = new Date (dob); 
}

// Prototype functions:
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '4-3-1980'); 
const person2 = new Person('Mary', 'Smith', '1-7-1970');

console.log(person2.getFullName()); // This will now log without the property or method names in the console
console.log(person1);



// CLASSES:::

// Classes do the same thing as object oriented programming, but it looks nicer (est. 2015):

// Original constructor function w/prototypes
function Person(firstName, lastName, dob) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.dob = new Date (dob); 
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Class (will do everything the constructor function did)
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.dob = new Date (dob); 
    }
    // Prototypes can go here:
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980'); 
const person2 = new Person('Mary', 'Smith', '1-7-1970');

console.log(person2.getFullYear()); // Will log the same answer with the use of the class



// DOCUMENT OBJECT MODEL::::

// DOM, or Document Object Model, is a synonym for UI, or User Interface

// With javascript, we can take HTML elements and put them into variables and the like:

console.log(window) // window is the parent object for all elements, so:

alert(1); // is the same as:

window.alert(1);

window.alert(1);

    // The 'document' keywords is what we're going to use to select elements from the page:

    // Single element:
    console.log(document.getElementById('my-form')); // This will log the entire html for that element in the console

        // You can also assign said element to a variable:

        const form = document.getElementById('my-form');

        console.log(form);

    // You can also select single elements via querySelector:

    document.querySelector('h1'); // This is a single selector (class,id, etc.) only, so even if there's more that one 'h1', it's only selecting the first one

    // Multiple elements: 

    console.log(document.querySelectorAll('.item')); // All elements matching that selector

        // You can also use:

        console.log(document.getElementsByClassName(''));

        // Or: 

        console.log(document.getElementsByTagName(''));



// Looping through elements:

const items = document.querySelectorAll('.item');

items.forEach(item) => console.log(item);


// Changing things in the DOM: 

const ul = document.querySelector('.items');

items.remove(); // This will remove all of the items with that class in the DOM

    // If you want to remove the last element with the same class:

    ul.lastElementChild.remove(); 

    // You can also edit content:

    ul.firstElementChild.textContent = 'Hello'; // This appends just the text of this ul element

    // You can edit children after the first:

    ul.children[1].innerText = 'Goodbye'; //innerText only covers visable text, not text hidden by CSS

    // You can also append the existing html from Javascipt:

    ul.lastElementChild.innerHTML = <h1>Hello</h1>; // You can add html dynamically

        // You can also edit styles:

        const btn = document.querySelector('.btn');

        btn.style.background = 'red'; // This will change your button to red

// EVENTS:::

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) =>  { // addEvenetListener takes two arguments: 'event' (click) and an event parameter (e) followed by a local or arrow 
    e.preventDefault(); // You need to call preventDefault if you know the behavior will interfere with the event
    console.log(e.target.className);
});

// Use can log different portions of the above to locate exactly which parts of the element to target

const btn = document.querySelector('.btn');

// You can select any element and change it
btn.addEventListener('mouseover', (e) =>  {  // There are literally evenets for EVERYTHING
    e.preventDefault(); 
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello, world</h1>';
}); 

// CREATING A FORM SCRIPT:: 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit); // 'onSubmit' is just the naming on the function

function onSubmit(e) {
    e.preventDefault(); // start by preventing the default

    if (nameInput.value === '' || emailInput.value === '') { // Prevent the user from submitting empty strings
        msg.classList.add('error'); // Here we're using this empty div to display an error in red
        msg.innerHTML = 'Please enter all fields'; // With this message

        setTimeout(() => msg.remove(), 3000); // This function call will remove said message after 3000ms (3 seconds)
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); // Append values to new li

        userList.appendChild(li); // Append the values to the next li

        // Clear fields:
        nameInput.value = '';
        emailInput.value = '';
    }
}