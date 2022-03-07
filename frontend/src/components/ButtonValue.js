import React, {useState} from "react";
import './ButtonValue.css'
function ButtonValue(props){
    return(
        <input className="button" type={"text"} value={props.value}></input>
    );
}

export default ButtonValue;