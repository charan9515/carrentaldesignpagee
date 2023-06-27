import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faHeart} from "@fortawesome/free-regular-svg-icons";
import { faFilter, faGear, faLineChart, faMagnifyingGlass, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Main=()=>{
    var n=useNavigate()
  var gohome=()=>{
    n("/")
  }
  var gocars=()=>{
    n("/gocars")
  }
  var gocontact=()=>{
    n("/gocontact")
  }
   var goabout=()=>{
    n("/goabout")
  }
  var gobook=()=>{
    n("/book")
  }
  var gologout=()=>{
    n("/golog")
  }
  var goboo=()=>{
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
               
                <div id="search">
                   

                </div>
                <div id="cars">
                    <div id="car-blocks">
                        
                        <div id="img1"></div>
                            <div id="price">
                                <p><button onClick={gobook}>Book</button></p>
                            </div>
                        
                       
                    </div>
                    <div id="car-blocks">
                        <div id="car-inner">
                        <div id="img2"></div>
                        <div id="price">
                                <p><button onClick={gobook}>Book</button></p>
                            </div>
                         </div>
                    </div>
                    <div id="car-blocks">
                        <div id="car-inner"> 
                        <div id="img3"></div>
                        <div id="price">
                                <p><button onClick={gobook}>Book</button></p>
                            </div>
                        </div>
                    </div>
                    <div id="car-blocks">
                        <div id="car-inner"> 
                        <div id="img4"></div>
                        <div id="price">
                                <p><button onClick={gobook}>Book</button></p>
                            </div>
                        </div>
                    </div>
                    <div id="car-blocks">
                        <div id="car-inner"> 
                        <div id="img5"></div>
                        <div id="price">
                                <p><button onClick={gobook}>Book</button></p>
                            </div>
                        </div>
                    </div>
                    <div id="car-blocks">
                        <div id="car-inner"> 
                        <div id="img6"></div>
                        <div id="price">
                                <p><button onClick={gobook}>Book</button></p>
                            </div>
                        </div>
                    </div>



                </div>
                <div id="place-cont">
                    <h2>Some of our branches are in</h2>
                    <div id="block-cont">
                        <div id="blocks1">
                        
                        </div>
                       
                        <div id="blocks2"></div>
                        <div id="blocks3"></div>
                        <div id="blocks4"></div>
                        <div id="blocks5"></div>
                        <div id="blocks6"></div>
                    </div>

                </div>
               

            </div>

        </div>
    )
}
export default Main;