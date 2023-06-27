import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './index.css';
import axios from 'axios';

export const COontact=()=> {
    let n=useNavigate()
    let [fname,setname]=useState("")
    let [flname,setlname]=useState("")
    let [femail,setemail]=useState("")
    let [fnumber,setpnumber]=useState("")
    let [fnote,setnte]=useState("")



    let gohome=()=>{
       n('/')
    }
    let goabout=()=>{
        n('/goabout')
    }
    let gocars=()=>{
      n('/gocars')
    }
    let gocontact=()=>{
        n('/gocantact')
    }
    var gologout=()=>{
        n("/golog")
      }
      var gobook=()=>{
        n('/gobook')
      }
    var mes= async(e)=>{
        e.preventDefault();
        if(fname==""&& femail==""){
            alert("please enter the above information")
        }
        else{
            let data={frstname:fname,lastname:flname,email:femail,phoneno:fnumber,message:fnote}
            let res=await axios.post("http://localhost:8080/contact/postcon",data)
            alert(res.data);
            if(res.data=="we will contact soon!!!"){
                n("/home");
            }

        }
    }
  return (
    <div>
         <div id="container home">
                <div id="dash">
                    <h2>RENT !T</h2>
                    <ul>
                        <li>
                            <a onClick={gohome}>Home</a>
                            <a onClick={goabout}>About</a>
                            <a onClick={gocars}>Our Cars</a>
                            <a onClick={gocontact}>Contact</a>
                            
                            <a onClick={gobook}>Details</a>
                            <a onClick={gologout}>Logout</a>


                        </li>
                    </ul>

                </div>
              
    <div id="contact">
            <div>
                <u><div><h1 style={{color:"orangered",marginBottom:'0.5cm'}}>Contact Us</h1></div></u>
                
                <input value={fname} onChange={e=>setname(e.target.value)} id="d"type="text" placeholder="enter your first name" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input value={flname} onChange={e=>setlname(e.target.value)} id="e"type="text" placeholder="enter your last name" required></input>
                
            </div>
            <div>
                <input  id="f"type="text" value={femail} onChange={e=>setemail(e.target.value)} placeholder="enter you mail" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input id="g" type="text" value={fnumber} onChange={e=>setpnumber(e.target.value)} placeholder="enter your phone number"required></input>
                
            </div>
            <div>
            </div>
            <div>
                
                <input value={fnote} onChange={e=>setnte(e.target.value)} style={{height:"90px",width:"400px",border:"0.06cm solid black",marginTop:"1cm",borderRadius:'5px'}}type="text" placeholder="send your feedback" ></input>
            </div>
            <div>
                <input onClick={mes} style={{height:'30px',width:"80px",backgroundColor:"blue",marginTop:"20px",color:'white',fontWeight:'bold',borderRadius:'5px'}} type="button" value="Sent"></input>
            </div>
            <h3 style={{color:"black"}}>if anything urgent contact to below number</h3>
           <h2 style={{color:"black"}}>+918985297274</h2>
        </div>
        </div>
        </div>
  )
}
export default COontact;