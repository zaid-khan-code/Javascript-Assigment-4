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


/*
function Studnet(name, roll) {
    this.name = name;
    this.roll = roll;
};


Studnet.prototype.greet = function () {
    return `Hello my name is ${this.name} and my roll num is ${this.roll}`
}

Studnet.prototype.rollNumchanged = function () {
    return `Hello my roll num chaged from this  ${this.roll++} to this ${this.roll} `
}


const hamza = new Studnet("Hamza", 25);
const bilal = new Studnet("Bilal", 30);

console.log(hamza.rollNumchanged());
console.log(bilal.greet());
*/



//======================================================
//                   Tasks 3.2
//======================================================


/*
class Studnet {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
};


Studnet.prototype.greet = function () {
    return `Hello my name is ${this.name} and my roll num is ${this.roll}`
}

Studnet.prototype.rollNumchanged = function () {
    return `Hello my roll num chaged from this  ${this.roll++} to this ${this.roll} `
}


const hamza = new Studnet("Hamza", 25);
const bilal = new Studnet("Bilal", 30);

console.log(hamza.rollNumchanged());
console.log(bilal.greet());
*/




//======================================================
//                   Tasks 3.3
//======================================================

/*
class Car {
    model() {
        console.log("This car have this model :");
    }
}


// class Toyota extends Car {
    //     model() {
        //         super.model();
        //         console.log("Toyota supra mk4 v18 turbo vo to to to to");   
        //     }
        // }
        
        
        class Toyota extends Car {
            model() {
                console.log("This car have this model : Toyota supra mk4 v18 turbo vo to to to to");   
    }
}

let b = new Car();
b.model()


let a = new Toyota();
a.model()
*/



//======================================================
//                   Tasks 4.1
//======================================================


/**
 
console.log(" Start of synchronous function ");


function exampleFun() {
    console.log("Inside synchronous function");
}

exampleFun();

setTimeout(() => {
    console.log(" Inside setTimeout callback OR Async Function");
}, 0);

console.log("End of synchronous function");

*/



//======================================================
//                   Tasks 4.2
//======================================================

/*
setTimeout(() => {
    console.log("1");
    
    setTimeout(() => {
        console.log("2");
        
        setTimeout(() => {
            console.log("3");
            
            setTimeout(() => {
                console.log("4");
            }, 1000);
            
        }, 1000);
        
    }, 1000);
    
}, 1000);
*/




//======================================================
//                   Tasks 4.3
//======================================================


/*
function delay(ms, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, ms);
    });
}

delay(1000, "1")
.then(() => delay(1000, "2"))
.then(() => delay(1000, "3"))
.then(() => delay(1000, "4"))
.catch((err) => console.error("Something went wrong:", err));
*/



//======================================================
//                   Final Task  
//======================================================




// ========================
// Task Manager App
// ========================
/*
class TaskManager {
    constructor() {
        let tasks = [];
        
        this.addTask = function (name, duration) {
            tasks.push({ name, duration, completed: false });
            console.log(`Task "${name}" added.`);
        };
        
        this.removeTask = function (name) {
            tasks = tasks.filter(t => t.name !== name);
            console.log(`Task "${name}" removed.`);
        };
        
        
        
        this.runTasks = function () {
            console.log("Running tasks asynchronously");
            
            tasks.forEach(function (task) {
                setTimeout(
                    function () {
                        task.completed = true;
                        console.log(`Task completed: ${task.name}`);
                    }.bind(this),
                    task.duration
                );
            }, this);
        };
    }
}
yu
const manager = new TaskManager();

manager.addTask("Goto Sleep", 2000);
manager.addTask("Do little Coding", 500); //shorter then sleep hehe 
manager.addTask("Goto Sleep", 2000);


manager.runTasks();


// ========================
// Runtime Observations
// ========================





// 1. Tasks completed in order of their durations, not addition order.

// 2. Without bind, "this" inside setTimeout would be undefined. that was suprising

// 3. the tasks variable is undefined if i directly do the manager.tasks

*/
