import React,{useContext} from "react";
import {FirstName,LastName} from './App'
const ComA=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    return(
        <>
        <h1>My name is {fname} {lname}</h1>
        </>
    )
}
export default ComA;