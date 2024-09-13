import React from "react";
import'./index.css';
import Login from "./Login";
import './Navbar.css'
import boat from './boat.svg';

import Nav from './Nav';
import Images121 from'./images121.jpg'
import Images122 from './images122.webp'
import Images123 from './images123.jpg'
import bar from'./bar.jpg'
import Neck8 from './Neck8.webp'
import watch from'./watch.jpg'
import boat8 from './boat9.webp'
import Airpodes from './Airpodes.jpg'
import bar3 from './bar3.webp'
import { NavLink } from "react-router-dom";
import images from './images11.jpg'
import gur1 from'./gur1.svg'
import gur2 from'./gur2.svg'
import gur3 from'./gur3.svg'
import gur4 from './gur4.svg'
import boat4 from './bopat1.4.webp'
import lif1 from './lif1.webp'
import lif2 from './lif2.webp'
import lif3 from './lif3.webp'
import lif4 from './lif4.webp'
const Navbar=()=>{
    return(
       
       <>
       
       <div  >   
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
      <div className="container-fluid">
       <NavLink  to="/">
       <img src={boat}/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="Home/">
              Airdopes
            </NavLink>
            <NavLink className="nav-link" to="About/">
            Soundbaar
            </NavLink>
            <NavLink className="nav-link" to="Contact/">
           
            Smart Watches
            </NavLink>
            <NavLink className="nav-link" to="Nav/">
           
           Neck Bands
           </NavLink>
            
          </div>
          <button class="btn btn-outline-success" type="login"><NavLink style={{textDecoration:"none" ,color:"black"}} to="Login/">Login</NavLink></button>
        </div>
       
      </div>
    </nav>
    </div>



{/* corsole */}

<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Images121} class="d-block w-100" width="300px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Images122} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Images123} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




<div  className="gurranty"style={{alignItems:"center",display:"flex", justifyContent:"space-arround" ,gap:"80px",textAlign:"center",marginLeft:"250px"}}>

<div>
<NavLink style={{color:"black" ,textDecoration:"none"}}><img src={gur1} width="60px"/>
<h5>1 year gurranty</h5></NavLink>
</div>
<div>
<NavLink style={{color:"black",textDecoration:"none" }}><img src={gur2} width="60px"/>
<h5>7 Days Replacement</h5></NavLink>
</div>
<div>
<NavLink style={{color:"black",textDecoration:"none" }}><img src={gur3} width="60px"/>
<h5>Free Express Delivery</h5></NavLink>
</div>
<div>
<NavLink style={{color:"black" ,textDecoration:"none"}}><img src={gur4} width="60px"/>
<h5>GST Billing</h5></NavLink>
</div>
</div>
<h3>Explorer<b> Best Seller</b></h3>




<div class="card-group" style={{justifyContent:"center", flexWrap:"wrap",gap:"100px",margin:"5%"}}>
 <div className="card" >
  <img src={boat4} class="card-img-top" alt="..."/>
    <div class="card-body">
    <NavLink to="/Contact"style={{color:"black",textDecoration:"none"}}>
      <h5 class="card-title">Smart Watches</h5>
      </NavLink>
    </div>
  </div>
  <div className="card">
    <img src={boat8} class="card-img-top" alt="..."/>
    <div class="card-body">
    <NavLink to="/Home" style={{color:"black",textDecoration:"none"}}><h5 class="card-title">Airdopes</h5>
      </NavLink>
    </div>
  </div>
  <div className="card">
    <img src={bar3} class="card-img-top" alt="..."/>
    <div class="card-body" >
    <NavLink to="/About" style={{color:"black",textDecoration:"none"}}>
      <h5 class="card-title">Sound baar</h5>
      </NavLink>
    </div>
  </div>
  <div className="card">
    <img src={Neck8} class="card-img-top" alt="..."/>
    <div class="card-body" >
    <NavLink to="/Nav" style={{color:"black",textDecoration:"none"}}>
      <h5 class="card-title">Neckbands</h5>
      </NavLink>
    </div>
  </div>
</div>



<h2>Shop by <b>Lifestyle</b></h2>
<div style={{gap:"50px",display:"flex",marginLeft:"4%"}} className="lifestyle">
  <img src={lif1} style={{width:"300px"}}/>
  <img src={lif2}style={{width:"300px"}}/>
  <img src={lif3}style={{width:"300px"}}/>
  <img src={lif4}style={{width:"300px"}}/>
</div>





<footer style={{borderTop:"3px solid red",textAlign:"center"}}>
  <div>
  <img src={boat}/>
  <h2>Subscribe to our email alerts!</h2>
  <input type="email" placeholder="Enter your email"/>
  <button >Subscribe</button>
  </div>
</footer>
</>

    )
}
export default Navbar;