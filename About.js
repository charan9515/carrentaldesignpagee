import React from "react";
import { useNavigate } from "react-router-dom";
import './About.css';
const CarHome=()=>{
  var n=useNavigate()
  var gohome=()=>{
    n("/")
  }
  var goabout=()=>{
    n("/goabout")
  }
  var gocars=()=>{
    n("/gocars")
  }
  var gocontact=()=>{
    n("/gocontact")
  }
  var gologout=()=>{
    n("/golog")
  }
  var gobook=()=>{
    n('/gobook')
  }
   
    return(
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
              
                <div>
                    <div id="Home">
                        <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"></img>
                        <p id="Qoute">"Make Travelling Easy and Fancy!!! </p>
                        <p id="Qoute2"> 
                        Book Now to
                                 Rent your
                         desired Car!!!
                        </p>
                        
                    </div>
                       
                </div>

            </div>
            <div id="about">
                <div id="about-content">
                   <p>why us</p>

                </div>

            </div>
            </div>
        
    )
}
export default CarHome;