

function Student({studName, studEmail, profilePic}){
    return(
        
        <div className="student">
            <img className="student-image" src={profilePic} alt='profile picture'></img>
            <h2 className="student-title">{studName}</h2>
            <p className="student-text">{studEmail}</p>
        </div>
        );
    }       

export default Student