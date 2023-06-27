import { Container, Divider } from "@mui/material";
import './Book.css';
import Button from '@mui/material/Button';

import React, { useState } from "react";
import axios from "axios";

    
let users=localStorage.getItem("uname")
    


const Book=()=>{
    let [fcar,settype]=useState("")
let [fplace,setplace]=useState("")
let [fdate,setdate]=useState("")
let [fdrop,setnddate]=useState("")
let [fprice,setprice]=useState("")


    let bok=async(e)=>{
        e.preventDefault();
        if(fplace==""){
            alert("enter required values!")
        }
        else{
            let data={user:users,cartype:fcar,ddate:fdrop,pdate:fdate,pickupplace:fplace,price:fprice}
        let result=await axios.post("http://localhost:8080/booking/bookpost",data)
        alert(result.data)
     

    }
}

    return(
        <Container>
            <section className="heading">
                <h2 >Car Rental Form</h2>
            </section>
            <Divider />
            <section className="info">
                <form className="details">
                <h3  >pickup-place:</h3><input type="text"  value={fplace} onChange={e=>setplace(e.target.value)}  ></input>
                <h3  >pickup-date:</h3><input type="date" value={fdate} onChange={e=>setdate(e.target.value)}  ></input>
                <h3  >drope-date:</h3><input type="date"  value={fdrop} onChange={e=>setnddate(e.target.value)}></input>
                
            
                </form>

            </section>
            {/* <Divider/> */}
            <section className="filters">
                <stack className="range">
                    <h1>Car Type</h1>
               <select value={fcar} onChange={e=>settype(e.target.value)} >
                <option>select </option>
                <option>Standard Cars</option> <option>Luxury Cars</option>
                <option>SUV'search</option>
                <option>VAN 's</option>

               </select>
                
                </stack>
                <stack className="range">
                    <h2>price range</h2>
                    <select value={fprice} onChange={e=>setprice(e.target.value)}>
                    <option>select </option>
                        <option>below 2000</option>
                        <option>2000-3000</option>
                        <option>3000-4000</option>
                        <option>4000-5000</option>
                        <option>
                            5000-6000
                        </option>


                        

                    </select>
                                   </stack>
                
            </section>
            <section className="personal-info">
          
                <Button onClick={bok} variant="contained" style={{marginLeft:"600px",width:"100px",marginTop:"40px",marginBottom:"50px"}}>Submit</Button>
            </section>
            <Divider/>
            <Divider/>
            <Divider/>
            <section>
                
            </section>
        </Container>

    )
}
export default Book;