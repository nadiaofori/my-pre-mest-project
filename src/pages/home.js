 
import Image from '../images/book.png'
// import image from '../images/art.png'
import '../css/home.css'
import { useHistory } from "react-router-dom"
import Button from "../components/button";
function Home() {
    let history= useHistory()
    // const [values, setvalues] = useState({})



    const gotologin = (e) =>{
        e.preventDefault();
        history.push("/login")
    }

    const gotosignup = (e) =>{
        e.preventDefault();
        history.push("/signup")
    }
    return (
        <div className="wpage">
            <div className="navbar">
                <nav className="LA">
                   <h1>LIBRARY OF ARTS</h1>         
                </nav>
                <div className="button">
                    <Button text="Login" classname="btn" onclick={gotologin} />
                    <Button text="Signup" classname="btn" onclick={gotosignup} />
                </div>
            </div>
            {/* <div className="imagediv">  
            </div> */}

            <div className="mpage">
                <h1>Welcome to the margical world<br/> of art work in Ghana</h1>
            </div>

            <div className="fpage">
                <div className="foot1">
                    <img src= {Image} alt="book"/>
                    <h2>Books</h2>
                    <h4>Read about the various types of art</h4>
                </div>
                <div className="foot2">
                    {/* <img src ={image} alt="artist"/> */}
                    <h2>Artist</h2>
                    <h4>Discover famous artist in Ghana and their wonderful works</h4>
                </div>
                <div className="foot3">
                    <h2>Tourism</h2> 
                    <h4>Find tourist sites of art work in Ghana</h4>
                </div>
            </div>

        </div>

    )
}
export default Home;
