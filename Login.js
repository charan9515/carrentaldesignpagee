import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import axios from "axios";

    var Login=()=>{
        var n=useNavigate()
        let [y,setpassword]=useState("")
        let [s,setemail]=useState("")
        var Login1=async(e)=>{
       
            if( y==""  && s==""){
                alert("information not entered")
                
            }
            else if(s==""){
                alert("enter mail")
            }
            else if(y==""){
                alert("enter password")
                
            }
            else{
                let result=await axios.post("http://localhost:8080/Sigdata/login/"+s+"/"+y)
                alert(result.data)
                if(result.data=="success"){
                    localStorage.setItem("uname",s);
                n("/home")}
            }
        }
        let Login2=()=>{
            n('/')
        }
 
    return(
            <div id="div1">
                <section id="container">
                    <form>
                        <p id="signup">Login</p>
                        <input placeholder="Username" value={s} onChange={e=>setemail(e.target.value)} type="email" id="inp2"required></input>
                        <input placeholder="Password" value={y} onChange={e=>setpassword(e.target.value)}  type="password" id="inp3" required></input>
                       <input type="button" value="Login" onClick={Login1}  id="inp4"></input>
                       <p id="login" onClick={Login2}>Don't have an account? Sign Up</p>

                        
                    </form>
                </section>
                
            </div>
    )
}
 
 
 export default Login;