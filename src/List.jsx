import Student from "./Student";
import profilePic1 from './assets/profile1.png'
import profilePic2 from './assets/profile2.png'
import profilePic3 from './assets/profile3.png'
import profilePic4 from './assets/profile4.png'
import profilePic5 from './assets/profile5.png'

function List(){

    const students = [
    {key:1, name: "Gojo", email: "Gojo@jujutsu.com", photo: profilePic1},
    {key:2,name: "Gojo", email: "Gojo@jujutsu.com", photo: profilePic2},
    {key:3,name: "Nobara", email: "Nobara@jujutsu.com", photo: profilePic3},
    {key:4,name: "Yuji", email: "Yuji@jujutsu.com", photo: profilePic4},
    {key:5,name: "Nanami", email: "Nanami@jujutsu.com", photo: profilePic5}
    ];


    
    return (<>
    {Object.keys(students).map((key) => {
        const student = students[key];
        return(
            <Student
            key={key}
            studName = {student.name}
            studEmail = {student.email}
            profilePic = {student.photo}/>
        )
    })}
    </>);
}
export  default List