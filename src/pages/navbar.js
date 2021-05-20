import {Link} from 'react-router-dom'
import '../css/navbar.css'
import Button from "../components/button"
import {useHistory} from 'react-router-dom'

const Navbar = () =>{

     let history = useHistory()
    // const [values, setvalues] = useState({})



    const gotosignin = (e) => {
        e.preventDefault();
        history.push("/signin")
    }

    const gotosignup = (e) => {
        e.preventDefault();
        history.push("/signup")
    }

    // const gotohome=(e)=>{
    //     e.preventDefault();
    //     history.push("/home")
    // }
    return(
        <>
            <div className="designs">
                    <div className="art">
                     <Link to="/" className="link">
                         <h1>𝓐𝓡𝓣𝓢</h1>
                     </Link>
                    </div>
                    <div className="list1">
                         {/* <Button text="Home" classname="link" onclick={gotohome} /> */}
                         <Button text="Sigin" classname="line" onclick={gotosignin} />
                         <Button text="Signup" classname="line" onclick={gotosignup} />
                    </div>
                

            </div>
        </>
    )
}
export default Navbar;