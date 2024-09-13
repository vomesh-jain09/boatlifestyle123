  import React, { useState } from "react";
 import './Login.css'

const Login = () =>{
    const[email, setEmail] = useState('');
    const[firstName, setfirstName] = useState('');
    const[lastName, setlastName] = useState('');
    const[message, setMessage] = useState('');
    const[errors, setErrors] = useState([]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const errors = validate ();
        setErrors(errors);
    
    }
    const validate = () => {
        const error = {};

        if(firstName == ""){
            error.firstName ="Enter your First Name";
            document.getElementById("firstName").focus();
           }  
           else if(!/^[A-Za-z]+$/.test(firstName)){
            error.firstName ="Please enter your first name correct.";
            document.getElementById("firstName").focus();
           } else{
            error.firstName ="";
           }

           if(lastName == ""){
            error.lastName ="Enter your Last Name";
            document.getElementById("lastName").focus();
           }  
           else if(!/^[A-Za-z]+$/.test(lastName)){
            error.lastName ="Please enter your last name correct.";
            document.getElementById("lastName").focus();
           } else{
            error.lastName ="";
           }

        if(email == ""){
            error.email ="Enter your E-mail address";
            document.getElementById("email").focus();
            
           }
           else if((email.charAt(email.length-4) != ".") && (email.charAt(email.length-3) != ".")){
            error.email ="Invalid E-mail address";
            document.getElementById("email").focus();
            
           }
           else if(email.charAt(0) == "@"){
            error.email ="Invalid E-mail address";
            document.getElementById("email").focus();
            
           }
           else if((email.charAt(email.length-10) != "@") && (email.charAt(email.length-9) != "@") && (email.charAt(email.length-12) != "@")  && (email.charAt(email.length-11) != "@") ){
            error.email ="Invalid E-mail address";
            document.getElementById("email").focus();
      
           }
           else{
            error.email ="";
           }

           if(message == ""){
            error.message ="Please write your message here..";
            document.getElementById("message").focus();
           }
           else{
            error.message ="";
           }
    if(error.message == "" && error.email == "" && error.lastName == "" && error.firstName == ""){
        alert("Message sent,Thank You..")
    }
        return error;
        
    }
    return (
        <>
        
         <div className="row">
            <div className="col-lg-12">
                
            <div  className="row" style={{display:"flex",justifyContent:"center"}}>
                <div className="contactTitle">Contact Me</div>
            </div>
            <div  className="row">
            
                <div className="col-lg-6" id="contactDetail">
                    <div id="contactDetails">
                    <center>
                    <span id="contactDetailsTitle" style={{color:"purple"}} >Let's have a chat!!</span><br/>
                    <span className="contactInfo">Phone no. :</span> 9034820962<br/>
                    <span className="contactInfo">Email id  : </span>vomeshjain00700@gmail.com
                    <div className='socialIcon'>
                    <a href='https://www.instagram.com/_sahil_thakur_17?igsh=YXg3bG92MTF6aWFx' target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href='https://x.com/SahilThakur1718?t=Iz-JWC8W_5QDdpZFBuci7A&s=09' target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100052396149502' target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.linkedin.com/in/sahil-thakur-553b74318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                </center>
                </div>
                </div>
                <div className="col-lg-6" id="contactForm">
                <form onSubmit={handleSubmit} action="https://formspree.io/f/mnqewozy" method="post" id="form">
                    <div className="row">
                        <div className="col-lg-6"  style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <div>
                    <label style={{color:"black"}}>First name</label><br/>
        <input type="text" id="firstName" autocomplete="off" onChange={(e) => setfirstName(e.target.value)}/><br/>
        {errors.firstName && <div id="firstNamee">{errors.firstName}</div>}
        
        </div>
         </div>
         <div className="col-lg-6"  style={{display:"flex",justifyContent:"center" ,marginBottom:"30px"}}>
            <div>
            <label style={{color:"black"}}>Last name</label><br/>
        <input type="text" placeholder="" id="lastName" autocomplete="off" onChange={(e) => setlastName(e.target.value)}/><br/>
        {errors.lastName && <div id="lastNamee">{errors.lastName}</div>}
        
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-6"  style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
            <div>
        <label style={{color:"black"}}>Email</label><br/>
        <input type="text"  id="email" autocomplete="off" onChange={(e) => setEmail(e.target.value)}/><br/>
        {errors.email && <div id="emaill">{errors.email}</div>}
       
        </div>
        </div>
        <div className="col-lg-6"  style={{display:"flex",justifyContent:"center",marginBottom:"10px"}}>
            <div>
        <label style={{color:"black"}}>Company</label><br/>
        <input type="text" placeholder="optional" id="company" autocomplete="off"/><br/>
        
        </div>
        </div>
        </div>
        <div className="row">
            <div className="col-lg-12" style={{display:"grid",justifyContent:"center",marginBottom:"10px"}}>
            <label style={{color:"black"}}>Message</label><br/>
        <textarea type="text" id="message" autocomplete="off" onChange={(e) => setMessage(e.target.value)}/><br/>
        {errors.message && <div id="messagee">{errors.message}</div>}
    
        </div>
        <div  style={{display:"flex",justifyContent:"center"}}>
        <input type="submit" id="formButton"/>
       </div>
        </div>
        </form>
          </div>
            </div>
    </div>
         </div>
         
        </>
    );
}

export default Login;