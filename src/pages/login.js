import InputField from "../components/inputfields"
import Button from "../components/button"
import '../css/login.css'

import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { useState } from "react"

function Login(){
    let history = useHistory()
    const [Username, setusername] = useState('')
    const [password, setpassword]= useState('')


    const onchangeusername = (e) =>{
        setusername(e.target.value)
    }

    const onchangepassword = (e) =>{
        setpassword(e.target.value)
    }

    const gotodashboard = (e) =>{
        e.preventDefault();
        history.push("/dashboard")
    }

    // const submit =(e) =>{
    //     e.preventDefault();

    //     console.log ({Username, password})
    // }


    return(
        <form className="logform">
            <div className="imagediv">  
            </div>
            <div className="loginput">
          <h1> Log In</h1>
          <InputField type= "Username" label="Username" name="username" className="loginput" onchange={onchangeusername} placeholder="e.g collins"/>
          <InputField type= "Password" label="Password" name="password" className="loginput" onchange={onchangepassword} />
          <div className="logbutton">
              <Button text="Login" onclick={gotodashboard} />
              {/* <Button text="Submit" onclick={submit} /> */}
              <Link to="/signup">New to the Library. </Link>
          </div>        
            </div>
        </form>
    )
}

export default Login;