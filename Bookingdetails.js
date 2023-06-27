import axios from "axios";
import React, { useState } from "react";

let user1=localStorage.getItem("uname");

        
var Bookde=()=>{
    
    let[id,setid]=useState("")
    
    const deleteUser=async(e)=>{
        e.preventDefault();
      let res= await axios.delete("http://localhost:8080/booking/delete/"+id)  
       alert(res.data)
    }
    
   
let [dea,setdata]=useState([])


    let bok=async(e)=>{
        e.preventDefault()
        let mydata=await axios.get("http://localhost:8080/booking/bookdata/"+user1)
        setdata(mydata.data)
        
    }
    return(
        <div style={{border:"90px"}}>
            <h1>Dear {user1} this are your upcoming booking </h1>
            <button onClick={bok}>Click to get deatiles</button>
            <table  border={{}}>
                <tr style={{color:"red"}}>
                    <th>Slno</th>
                    <th>Cartype</th>
                    <th>Drop date</th>
                    <th>Pickup date</th>
                    <th>Pickup place</th>
                    <th>Price</th>
                    <th>User</th>
                </tr>
            {
                dea.map((k)=>{
                   return <tr>
                    <tr>{k.slno}</tr>
                        <td>{k.cartype}</td>
                        <td>{k.ddate}</td>
                        <td>{k.pdate}</td>
                        <td>{k.pickupplace}</td>
                        <td>{k.price}</td>
                        <td>{k.user}</td>
                    </tr>
                })

            }
            

            </table>
            <input type="text"  placeholder="enter id to delete" value={id} onChange={e=>setid(e.target.value)} ></input>
            <button onClick={deleteUser}>click to delete</button>
            
        </div>
    )
}
export default Bookde;