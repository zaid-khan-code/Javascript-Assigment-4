//======================================================
//                   Tasks 1.1
//======================================================

// const person = {
//     name: 'ZAid Khan Khalil',
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// console.log("Step 2: Normal method call:");
// person.greet();


// console.log("Step 3: Method assigned to a variable and called:");

// const greetFunction = person.greet;
// greetFunction();


// console.log("Fixed using 'call':");
// greetFunction.call(person);


//======================================================
//                   Tasks 1.2
//======================================================


/*
// Step 1: Create a simple function that accepts multiple parameters
function greetPerson(firstName, pk, lastName) {
    console.log(`${pk}, ${firstName} ${lastName}`);
}


greetPerson.call(null, "Talal", "Assalamualikum ", "Ahmed");
greetPerson.call(null, "Imran", "Hi", "Sara");



greetPerson.apply(null, ["Talal", "Assalamualikum ", "Ahmed"]);
greetPerson.apply(null, ["Imran", "Hi", "Sara"]);


// with the apply
greetPerson.apply(null, ["brother", "Greetings"]);
// with the call
greetPerson.call(null, "brother", "Greetings");

*/


//======================================================
//                   Tasks 1.3
//======================================================



/*
const person = {
    name: "Ahmed",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("Without bind ");
setTimeout(person.greet, 1000); 


console.log("With bind ");
const boundGreet = person.greet.bind(person);
setTimeout(boundGreet, 1000);



const anotherPerson = {
    name: "Sara"
};


console.log("Using bind with a different object:");
const anotherBoundGreet = person.greet.bind(anotherPerson);
setTimeout(anotherBoundGreet, 1000);  
*/




//======================================================
//                   Tasks 2.1
//======================================================


/*
function createCounter() {
   let count = 0;  
   
   
   return function () {
       count++;   
       console.log(`Count: ${count}`);
       return count;
   };
}


const counter1 = createCounter();  

// Calling counter1 multiple times
counter1();  
counter1();   
counter1();   


const counter2 = createCounter();

// Calling counter2 
counter2();  
counter2(); 


// Calling counter1 again
counter1(); 
*/


//======================================================
//                   Tasks 2.2
//======================================================



/*
 
function createCountFactory() {
    
let count = 0;

return function () {
    count++;
    console.log(`Count: ${count}`);
    return count;
};
}


const count1 = createCountFactory();
const count2 = createCountFactory();
const count3 = createCountFactory();


//Calling count1
console.log("Closrue  1");
console.group();

count1();
count1();
console.groupEnd();

// Calling count2
console.log("Closrue  2");
console.group();

count2();
count2();
console.groupEnd();

// Calling count3
console.log("Closrue  3");
console.group();
count3();
count3();
console.groupEnd();


console.log("Calling count1 again:");
count1();
*/




//======================================================
//                   Tasks 3.1
//======================================================



