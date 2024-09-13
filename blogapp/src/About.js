import React from "react";
import boat from './boat.svg'
import { NavLink } from "react-router-dom";
import bar1 from './bar1.webp'
import bar2 from './bar2.webp'
import bar3 from './bar3.webp'
import bar4 from './bar4.webp'
import bar5 from './bar5.webp'
import bar6 from './bar6.webp'
import bar7 from './bar7.webp'

import bar8 from './bar8.webp'
const About=()=>{
    return(
    <>
   <div>
   
    <center>
      <h1>Sound baar</h1>
    </center>

    <div class="row row-cols-1 row-cols-md-3 g-4"style={{ justifyContent:"space-evenly",gap:"10px", display:"flex", margin:"20px"}}>
  <div class="col" style={{width:"300px"}}>
    <div class="card">
      <img src={bar1} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="//www.boat-lifestyle.com/products/ultima-chronos-amoled-display-smartwatch">boAt Ultima Chronos
</NavLink></h5>
        <h6>Smartwatch with 1.96" (4.97cm) AMOLED Display, BT Calling, Crest OS+, 100+ Watch Faces</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark" style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar2}class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-connect-max-biggest-display-smartwatch">boAt Ultima Connect Max </NavLink></h5>
        <h6>Biggest 2" (5.08 cm) HD Display Smartwatch, BT Calling, Vibrations and DND Mode, 100+ Sports Mode</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar3} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-prism-amoled-display-smartwatch">boAt Ultima Prism
 </NavLink></h5>
        <h6>Smartwatch with 1.96" (4.97cm) AMOLED Display, BT Calling, 700+ active modes, Watch Face Studio</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar4} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/wave-flex-connect-bt-calling-smartwatch">boAt Wave Flex Connect </NavLink></h5>
        <h6>1.83" (4.64 cm) Large Display BT Calling Smartwatch, Upto 10 Days Battery, IP68, Dust & Splash Resistance</h6>
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
      </div>    
      {/*  */}
      <div >
    <div class="row row-cols-1 row-cols-md-3 g-4"style={{ justifyContent:"space-evenly",gap:"10px", display:"flex", margin:"20px"}}>
  <div class="col" style={{width:"300px"}}>
    <div class="card">
      <img src={bar5} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="//www.boat-lifestyle.com/products/ultima-chronos-amoled-display-smartwatch">boAt Ultima Chronos
</NavLink></h5>
        <h6>Smartwatch with 1.96" (4.97cm) AMOLED Display, BT Calling, Crest OS+, 100+ Watch Faces</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar6} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-connect-max-biggest-display-smartwatch">boAt Ultima Connect Max </NavLink></h5>
        <h6>Biggest 2" (5.08 cm) HD Display Smartwatch, BT Calling, Vibrations and DND Mode, 100+ Sports Mode</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar7} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-prism-amoled-display-smartwatch">boAt Ultima Prism
 </NavLink></h5>
        <h6>Smartwatch with 1.96" (4.97cm) AMOLED Display, BT Calling, 700+ active modes, Watch Face Studio</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar8}class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/wave-flex-connect-bt-calling-smartwatch">boAt Wave Flex Connect </NavLink></h5>
        <h6>1.83" (4.64 cm) Large Display BT Calling Smartwatch, Upto 10 Days Battery, IP68, Dust & Splash Resistance</h6>
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
</div>
      </div>  



      {/*  */}
    <div  class="row row-cols-1 row-cols-md-3 g-4"style={{ justifyContent:"space-evenly",gap:"10px", display:"flex", margin:"20px"}}>  
      <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar6} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-connect-max-biggest-display-smartwatch">boAt Ultima Connect Max </NavLink></h5>
        <h6>Biggest 2" (5.08 cm) HD Display Smartwatch, BT Calling, Vibrations and DND Mode, 100+ Sports Mode</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar1} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-connect-max-biggest-display-smartwatch">boAt Ultima Connect Max </NavLink></h5>
        <h6>Biggest 2" (5.08 cm) HD Display Smartwatch, BT Calling, Vibrations and DND Mode, 100+ Sports Mode</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar3} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-connect-max-biggest-display-smartwatch">boAt Ultima Connect Max </NavLink></h5>
        <h6>Biggest 2" (5.08 cm) HD Display Smartwatch, BT Calling, Vibrations and DND Mode, 100+ Sports Mode</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
  <div class="col"style={{width:"300px"}}>
    <div class="card">
      <img src={bar5} class="card-img-top" alt="..."/>
      <div class="card-body"style={{backgroundColor:""}}>
        <h5 class="card-title"><NavLink style={{textDecoration:"none",color:"black"}} to="https://www.boat-lifestyle.com/products/ultima-connect-max-biggest-display-smartwatch">boAt Ultima Connect Max </NavLink></h5>
        <h6>Biggest 2" (5.08 cm) HD Display Smartwatch, BT Calling, Vibrations and DND Mode, 100+ Sports Mode</h6>
        
        <h1>₹1,599</h1>
        <p class="card-text"> including all taxes</p>
        <button type="button" class="btn btn-dark"style={{color:"black"}}>ADD TO CARD</button>
      </div>
    </div>
  </div>
   </div>
   </div>
   <div style={{display:"flex", flexWrap:"wrap",gap:"20px",margin:"80px"}}>
   <NavLink to="/Home"><button type="button" class="btn btn-dark"style={{color:"black"}}>Airpodes</button></NavLink>
   <NavLink to="/"><button type="button" class="btn btn-dark"style={{color:"black"}}>Home</button></NavLink>
   <NavLink to="/Contact"><button type="button" class="btn btn-dark"style={{color:"black"}}>Smart watches</button></NavLink>
   </div>
    </>
    )
 }
 export default About;
        