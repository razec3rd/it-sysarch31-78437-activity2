import Header from "./Header"
import Footer from "./Footer";
import Student from "./Student";
import List from "./List";

function App() {
    return(
        <>
        <div id="mainHeader">
        <Header/>
        </div>
        <div id="mainBody">
        <List/>
        </div>
        <div id="mainFooter">
        <Footer/>
        </div>
        </>
    );
}

export default App
