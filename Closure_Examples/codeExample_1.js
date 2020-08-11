'use strict';

function lookUpStudent(studentID) {
    let students = [
        { id: 14, name: "Kyle" },
        { id: 73, name: "Suzy" },
        { id: 112, name: "Frank" },
        { id: 6, name: "Sarah" }
    ]
    return function greetStudent(greeting) {
        let student = students.find(
            student => student.id === studentID
        );
        return `${greeting} , ${student.name}!`
    };

}

let chosenStudent = [
    lookUpStudent(14),
    lookUpStudent(112),
]
console.log(chosenStudent[0].name)
console.log(chosenStudent[0]('hey'))
console.log(chosenStudent[1]('hi'))
