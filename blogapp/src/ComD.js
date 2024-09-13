import React,{useContext} from "react";
import {Titles} from './App';
let ComD=()=>{
    const Ttitle = useContext(Titles);
    return(<>
    <div>
        <h1>welcome</h1>
        {Ttitle}
    </div>
    </>)
}
export default ComD;