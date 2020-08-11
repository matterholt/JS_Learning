

function lookUpStudent(studentID) {
    let students = [
        { id: 14, name: "Kyle" },
        { id: 73, name: "Suzy" },
        { id: 112, name: "Frank" },
        { id: 6, name: "Sarah" }
    ]
    return function greetStudent() {
        let student = students.find(
            student => student.id === studentID
        )
    }
}