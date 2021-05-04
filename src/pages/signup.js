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
        console.log(values);
    }
    // const gotosignin = (e) =>{
    //     e.preventDefault();
    //     history.push("/signin")
    // }
    const submit = (e) =>{
        e.preventDefault();
        console.log(values);
        fetch('http://localhost:5000/api/v1/signup', 
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
    
          
        },err=>console.log(err))
    }


    return (
        <form className="headform">
            <div className="subhead">
             <h1>Sign Up</h1>
            </div>
            <div className="inputform">
                <div className="maininput">
                    {/* <InputField type="text" label="Firstname" name="firstname"  className="inputlable" placeholder="e.g collins" onchange={onchange} />
                    <InputField type="text" label="Lastname"  name="lastname" className="inputlable" placeholder="e.g wiredu" onchange={onchange} /> */}
                    <InputField type="text" label="Username"  name="username" className="inputlable" placeholder="e.g cole" onchange={onchange} />
                    <InputField type="email" label="Email"  name="email" className="inputlable" placeholder="e.g collins@gmail.com" onchange={onchange} />
                    <InputField type="password" label="Password" className="inputlable" name="password" onchange={onchange} />
                    <InputField type="Password" label="Confirm Password"className="inputlable" name="cpassword" onchange={onchange} />
                    <Button text="Signup" classname="buttoninput" onclick={submit} />
                </div>
                    <div className="link">
                    <Link to="/signin">Member of the Library? </Link>
                    </div>
            </div>
        </form>
    )
}

export default Signup;