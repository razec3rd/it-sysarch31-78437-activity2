import profilePic from './assets/profile.png'

function Student(){
    return(
        
        <div className="student">
            <img className="student-image" src={profilePic} alt='profile picture'></img>
            <h2 className="student-title">John Doe</h2>
            <p className="student-text">John@doe.com</p>
        </div>
        );
    }       

export default Student