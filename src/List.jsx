import Student from "./Student";

function List(student){
const email = student.email;
const name = student.name

    const students = [
        {id: 1, name: "John Doe", email: "john@doe.com"},
        {id: 2, name: "Juan Tan", email: "juan@tan.com"},
        {id: 3, name: "Juan Tam", email: "juan@tam.com"},
        {id: 4, name: "Juan Tang", email: "juan@tang.com"},
        {id: 5, name: "Juan Tal", email: "juan@tal.com"}
    ];

    const listStudents = students.map(student => <Student/>);
    return (<ol>{listStudents}</ol>);
}
export  default List