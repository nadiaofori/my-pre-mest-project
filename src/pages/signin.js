import InputField from "../components/inputfields";
import Button from "../components/button";
import '../css/login.css';
import image from '../images/login-xxl.png';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import validateMethod from "../components/validation";

// import { useAppContext } from "../components/context"

function Signin() {
    const [values, setValues] = useState({})
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        formError: { email: "", password: "", comparePassword: "", name: "" },
        formValid: false,
        emailValid: false,
        passwordValid: false,
        nameValid: false,
        fieldNameEmail: "email",
        fieldNamePassword: "password",
        fieldNameUserName: "name"
    });
    let history = useHistory()


    useEffect(() => {
        validateMethod(userInfo.fieldNameEmail, userInfo.email, userInfo, setUserInfo)
        console.log(userInfo.email)
    }, [userInfo.email, userInfo.emailValid])

    // const [message, setmessage] = useState({})

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({
          ...userInfo,
          [e.target.name]: value
        });
      };
    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value })
    // }

    const submit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/v1/login',
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
                    <InputField value={userInfo.email}  type="Username" label="Username" name="email" className="iptf" onchange={handleChange} placeholder="e.g collins" />
                    <InputField type="Password" label="Password" name="password" className="iptf" onchange={handleChange} />
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