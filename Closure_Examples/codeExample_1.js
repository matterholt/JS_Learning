'use strict';

function lookUpStudent(studentID) {
    // Top layer function that has
    // 1. private variable that can not be changed 
    // 2. returns a function 
    let students = [
        { id: 14, name: "Kyle" },
        { id: 73, name: "Suzy" },
        { id: 112, name: "Frank" },
        { id: 6, name: "Sarah" }
    ]
    return function greetStudent(greeting) {
        let student = students.find(
            // arrow function that return true!
            student => student.id === studentID
        );
        return `${greeting} , ${student.name}!`
    };

}

// the top layer function can have multiple instances that are separated from one another 
// 
let chosenStudent = [
    lookUpStudent(14),
    lookUpStudent(112),
]

// js has a property that can be called to confirm what the name of function
// example is below
console.log(chosenStudent[0].name)

/* 
At this point the top layer function has been completed and 
and the one could assume that the variable at the top layer would 
be discarded. Closures allow the  greetStudent() to have access to the variable
*/
console.log(chosenStudent[0]('hey'))
console.log(chosenStudent[1]('hi'))
