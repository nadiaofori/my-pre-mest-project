import InputField from "../components/inputfields"
import Button from "../components/button"
import '../css/login.css'
import image from '../images/login-xxl.png'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { useState } from "react"
// import { useAppContext } from "../components/context"

function Signin(){
    const {values,setValues}= useState({})
    let history = useHistory()
    
    // const [message, setmessage] = useState({})


    const onchange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const submit =(e) =>{
        e.preventDefault();
        let json_object = JSON.stringify(values)

        fetch('http://localhost:5000/api/v1/login', 
        {
          method: 'GET',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
          if (responseData.success){
              history.push('/dashboard')
          }
          else{
             
          }
    
          
        },err=>console.log(err))

        // console.log ({Username, password})
    }


        return(
            <form className="logform">
                <div className="loginput">
                        <div className="userdiv">
                            <h1> User Login</h1>
                            <img src={image} alt="icon" className="imageicon"/>
                        </div>
                        <div className="inputfields">
                            <InputField type= "Username" label="Username" name="username" className="iptf"  onchange={onchange} placeholder="e.g collins"/>
                            <InputField type= "Password" label="Password" name="password" className="iptf"  onchange={onchange} />
                        </div>
                        <Button classname="btn" text="Signin" onclick={submit} /> 
                            <div style={{marginTop:"20px"}}>
                        <Link to="/signup"> New to the Library? </Link>
                            </div>
                </div>
            </form>
        )
    }

export default Signin;