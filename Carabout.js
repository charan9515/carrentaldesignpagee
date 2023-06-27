import React from 'react';
import './Carabout.css';
import { useNavigate } from "react-router-dom";

export const Carabout = () => {

      var n=useNavigate()
  var gohome=()=>{
    n("/gohome")
  }
  var goabout=()=>{
    n("/goabout")
  }
  var gocars=()=>{
    n("/gocars")
  }
  var gocontact=()=>{
    n("/gocontct")
  }
  var gologout=()=>{
    n("/golog")
  }
  var gobook=()=>{
    n('/gobook')
  }
    return(
       
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
                

           <div className='ima'>  
           <div   className='imag' >                 
            <img src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/09/best-car-rental-uk_lead.jpg?itok=ksDr5_3D" alt="Image" height={300} width={100} class="Image"></img>
            <p id="Qoute">"Best Services Are Provided <br></br>
                                             With  Best Work!!" </p>
                        <p id="Qoute2"> 
                        Turn Moments into Memories
                                           with Our Rental Fleet

                        </p>
                        </div>
            
            
            <div className='content'>
           <u> <div><h2 style={{fontStyle:"oblique",backgroundColor:"black",color:'white'}}>About us</h2></div></u>

<p>* The main objective of the Car Rental System is to manage the details of Car,Payment,Customer,Supplier,Insurance. </p> 
 <p>* It manages all the information about Car, Booking, Insurance, Car. </p>
  <p> * The project is totally built at administrative end and thus only the administrator is guaranteed the access</p>
<p>* If you want to book directly through a supplier, and not through a broker – choose our Rent A Car</p>
<p>* this will give you better flexibility in terms of vehicle choices</p>
<p>* vehicle make and model will be confirmed, and not “similar” to those you selected</p>
  <p>* you can directly negotiate some of the terms and conditions, payment options, especially if you require unique or long term rental service</p>
   <p>* you can book “commission free”</p>
<p> * you can reach us 24/7 on our mobile numbers</p>
<p>* you can call us free from the “Free call” service on our website</p>
</div>
           </div>
           
     </div>      
  )
}
export default Carabout;
