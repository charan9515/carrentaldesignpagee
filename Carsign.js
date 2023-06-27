import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';
import axios from "axios";

    var Signup=()=>{
        let [x,setname]=useState("")
        let [y,setemail]=useState("")
        let [z,setnumber]=useState("")
        let [s,setpassword]=useState("")
        var n=useNavigate()
        var Login1=async(e)=>{
            e.preventDefault();
   
            if(x==""&& y=="" && z=="" && s==""){
                alert("information not entered")
               
                
            }
            else if(x==""){
                alert("enter name")
            }
            else if(y==""){
                alert("enter email")
            }
          
     else{
        let data={name:x,email:y,number:z,password:s}
        let result=await axios.post("http://localhost:8080/Sigdata/logindara",data)
        alert(result.data)
        if(result.data=="added"){
         n("/glogin")
        }
            }
            
        }
        let Login2=()=>{
            n("/glogin")

        }
 
    return(
            <div id="div1">
                <section id="container">
                    <form>
                        <p id="signup">SignUp</p>
                        <input placeholder="Name" value={x} onChange={e=>setname(e.target.value)}  type="text" id="inp"></input>
                        <input placeholder="PH.Number" value={z} onChange={e=>setnumber(e.target.value)} type="number" id="inp1" required></input>
                        <input placeholder="Gmail" value={y} onChange={e=>setemail(e.target.value)} type="email" id="inp2"required></input>
                        <input placeholder="Password" value={s} onChange={e=>setpassword(e.target.value)} type="password" id="inp3"></input>
                       <input type="button" value="Create Account" onClick={Login1}  id="inp4"></input>
                        <p id="login">Already have an account?<a onClick={Login2}>LogIn</a></p>
                    </form>
                </section>
                
            </div>
    )
}
 
 
 export default Signup;