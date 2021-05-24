import InputField from "../components/inputfields";
import Button from "../components/button";
import '../css/login.css';
import image from '../images/login-xxl.png';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState } from "react";
// import validateMethod from "../components/validation"

// import { useAppContext } from "../components/context"

function Signin() {
    let history = useHistory()
    const [values, setValues] = useState({})
    
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();

        fetch('https://magical-art-backend.herokuapp.com//api/v1/login',
            {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(response => {

                if (response.success) {
                    alert('sign in successful')
                    history.push('/dashboard')
                } else if (response.failure) {
                    alert("wrong user or password")
                }
                else if (response.goaway) {
                    alert("user doesn't exist")
                    history.push('/')
                }


            }, err => console.log(err))

    }
    return (
        <form className="logform">
            <div className="loginput">
                <div className="userdiv">
                    <h1> User Login</h1>
                    <img src={image} alt="icon" className="imageicon" />
                </div>
                <div className="inputfields">
                    <InputField  type="email" label="Email" name="email" className="inputemail" placeholder="e.g collins@gmail.com"  onchange={onChange}  />
                    <InputField type="Password" label="Password" name="password" className="inputemail" onchange={onChange} />
                </div>
                <Button classname="btn" text="Signin" onclick={submit} />
                <div style={{ marginTop: "20px" }}>
                    <Link to="/signup"> New to the Library? </Link>
                </div>
            </div>
        </form>
    )
}
export default Signin;