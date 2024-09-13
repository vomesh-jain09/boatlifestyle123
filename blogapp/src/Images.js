import React,{useState} from "react";
import boat from './boat.svg'
import boat1 from './boat12.webp'
import boat2 from './boat1.3.webp'
import boat3 from './boat1.1.webp'

const Images=()=>{
    const [image,change]=useState(boat);
    const Img1=()=>{
        change(boat1)
        document.getElementById("btn1").innerHTML="Welcome";
    }
    const Img2=()=>{
        change(boat2)
        document.getElementById("btn2").innerHTML="to";
    }
    const Img3=()=>{
        change(boat3)
        document.getElementById("btn3").innerHTML="Hooks";
    }
    return(
        <>
        <img src={image} height="800px" width="500px"/><br/>
      <button id="btn1" onClick={Img1} style={{borderRadius:"2em",color:"purple", background:"red" ,width:"15%"}}>Img1</button>
      <button id="btn2" onClick={Img2}style={{borderRadius:"2em",color:"purple", background:"red",width:"15%"}}>Img2</button>
      <button id="btn3" onClick={Img3}style={{borderRadius:"2em",color:"purple", background:"red",width:"15%"}}>Img3</button>
        </>
    )
}
export default Images;