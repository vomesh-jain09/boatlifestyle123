import React from "react";
import { NavLink } from "react-router-dom";
import Neck1 from './Neck1.webp'
import Neck2 from './neck2.webp'
import Neck3 from './Neck3.webp'

import Neck5 from './Neck5.webp'
import Neck6 from './Neck6.webp'

import Neck8 from './Neck8.webp'
const Nav=()=>{
return(
    <>
    <h1 style={{color:"purple ",textAlign:"center" ,margin:"2%"}}>Neck Bands</h1>
     <div class="row row-cols-1 row-cols-md-3 g-4" style={{justifyContent:"space-evenly",gap:"10px"}}>
  <div class="col"style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck1} class="card-img-top" alt="..."/>
      <div class="card-body" style={{}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none", color:"black"}} to="https://www.flipkart.com/boat-airdopes-alpha-35-hrs-playback-13mm-drivers-dual-mics-enx-beast-mode-bluetooth-headset/p/itm1181f915b81ec?pid=ACCGP2HJA3HKHTF4">boAt Airdopes Alpha 
        </NavLink></h5>
        <h6>with 35 HRS Playback, 13mm Drivers, Dual Mics ENx & Beast Mode Bluetooth Headset  (Jet Black, In the Ear)</h6>
        <p class="card-text">Special offer</p>
        <h1>₹699</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck2} class="card-img-top" alt="..." />
      <div class="card-body"style={{background:"visible"}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none", color:"black"}}to="https://www.boat-lifestyle.com/products/airdopes-131">boAt Airdopes 131</NavLink></h5>
        <h6>Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</h6>
        <p class="card-text">Special Offer</p>
        <h1>₹ 799</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck3} class="card-img-top" alt="..."/>
      <div class="card-body"style={{}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none", color:"black"}} to="https://www.boat-lifestyle.com/products/airdopes-141">boAt Airdopes 141

 </NavLink></h5>
 <h6>Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance</h6>
    <p class="card-text">Special Offer</p>
        <h1>₹ 1,099</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
       
      </div>
    </div>
  </div>
  <div class="col" style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck5} class="card-img-top" alt="..."/>
      <div class="card-body"style={{}}>
        <h5 class="card-title"><NavLink  style={{textDecoration:"none", color:"black"}} to=" https://www.boat-lifestyle.com/products/airdopes-ultra-plus-large-playback-earbuds">boAt Airdopes Ultra Plus
</NavLink></h5>
<h6>Wireless Earbuds with 50 Hours Playback, BEAST™ Mode, Quad Mics with ENx™ Tech, IWP™ Technology</h6>
        <p class="card-text">Special Offer</p>
        <h1>₹1,599</h1>     
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{justifyContent:"space-evenly",gap:"10px",marginTop:"2%"}}>
  <div class="col"style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck1} class="card-img-top" alt="..."/>
      <div class="card-body" style={{}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none", color:"black"}} to="https://www.flipkart.com/boat-airdopes-alpha-35-hrs-playback-13mm-drivers-dual-mics-enx-beast-mode-bluetooth-headset/p/itm1181f915b81ec?pid=ACCGP2HJA3HKHTF4">boAt Airdopes Alpha 
        </NavLink></h5>
        <h6>with 35 HRS Playback, 13mm Drivers, Dual Mics ENx & Beast Mode Bluetooth Headset  (Jet Black, In the Ear)</h6>
        <p class="card-text">Special offer</p>
        <h1>₹699</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck2} class="card-img-top" alt="..." />
      <div class="card-body"style={{background:"visible"}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none", color:"black"}}to="https://www.boat-lifestyle.com/products/airdopes-131">boAt Airdopes 131</NavLink></h5>
        <h6>Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</h6>
        <p class="card-text">Special Offer</p>
        <h1>₹ 799</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck3} class="card-img-top" alt="..."/>
      <div class="card-body"style={{}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none", color:"black"}} to="https://www.boat-lifestyle.com/products/airdopes-141">boAt Airdopes 141

 </NavLink></h5>
 <h6>Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance</h6>
    <p class="card-text">Special Offer</p>
        <h1>₹ 1,099</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
       
      </div>
    </div>
  </div>
  <div class="col" style={{width:"300px"}}>
    <div class="card h-100">
      <img src={Neck5} class="card-img-top" alt="..."/>
      <div class="card-body"style={{}}>
        <h5 class="card-title"><NavLink  style={{textDecoration:"none", color:"black"}} to=" https://www.boat-lifestyle.com/products/airdopes-ultra-plus-large-playback-earbuds">boAt Airdopes Ultra Plus
</NavLink></h5>
<h6>Wireless Earbuds with 50 Hours Playback, BEAST™ Mode, Quad Mics with ENx™ Tech, IWP™ Technology</h6>
        <p class="card-text">Special Offer</p>
        <h1>₹1,599</h1>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
</div>

    </>
)
}
export default Nav;