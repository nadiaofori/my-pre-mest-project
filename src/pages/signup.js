import { Link } from "react-router-dom"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import '../css/signup.css'
import Button from "../components/button";
import InputField from "../components/inputfields";


function Signup() {
    let history = useHistory()
    const [values, setValues] = useState({})

    const onchange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
        console.log(values);
    }
    
    const submit = (e) =>{
        e.preventDefault();
        console.log(values);
        fetch('https://magical-art-backend.herokuapp.com/api/v1/signup', 
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          history.push('/signin')  
        })
    }


    return (
        <form className="headform">
            <div className="subhead">
             <h1>Sign Up</h1>
            </div>
            <div className="inputform">
                <div className="maininput">
                    <InputField type="text" label="Username"  name="username" className="inputlable" placeholder="e.g cole" onchange={onchange} />
                    <InputField type="email" label="Email"  name="email" className="inputlable" placeholder="e.g collins@gmail.com" onchange={onchange} />
                    <InputField type="password" label="Password" className="inputlable" name="password" onchange={onchange} />
                    <InputField type="Password" label="Confirm Password"className="inputlable" name="cpassword" onchange={onchange} />
                    <Button text="Signup" classname="inputbutton" onclick={submit} />
                </div>
                    <div className="lin">
                    <Link to="/signin">Member of the Library? </Link>
                    </div>
            </div>
        </form>
    )
}

export default Signup;