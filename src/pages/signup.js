import { useHistory, Link } from "react-router-dom"
import { useState } from "react"

import '../css/signup.css'
import Button from "../components/button";
import InputField from "../components/inputfields";


function Signup() {
    let history= useHistory()
    const [values, setvalues] = useState({})


    const onchange = (e) =>{
        setvalues({...values, [e.target.name]: e.target.value})
    }
    const gotologin = (e) =>{
        e.preventDefault();
        history.push("/login")
    }
    // const submit = (e) =>{
    //     e.preventDefault();
    //     console.log(values);
    // }

    return (
        <form className="headform">
            <h1 className="subhead">Sign Up</h1>
            <div className="inputform">
            <InputField type="text" label="Firstname" className="inputlable" placeholder="e.g collins" onchange={onchange} />
            <InputField type="text" label="Lastname" className="inputlable" placeholder="e.g wiredu" onchange={onchange} />
            <InputField type="text" label="Username" className="inputlable" placeholder="e.g cole" onchange={onchange} />
            <InputField type="email" label="Email" className="inputlable" placeholder="e.g collins@gmail.com" onchange={onchange} />
            <InputField type="password" label="Password" className="inputlable" name="password" onchange={onchange} />
            <InputField type="Password" label="Confirm Password"className="inputlable" name="cpassword" onchange={onchange} />
            </div>
            <div>
                <Button text="Signup" onclick={gotologin} />
                {/* <Button text="Login " onclick={gotodashboard} /> */}
                <Link to="/login">Member of the Library </Link>
            </div>
            </form>
    )
}

export default Signup;