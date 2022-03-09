import React, {useState} from "react";
import ButtonValue from "./ButtonValue";
import "./Person.css";

function Person(props){
    const listValues = () => {
        let list = [];
        for(let i = 0; i < props.maior; i++){
            if(i < props.person.values.length){
                list.push(<div key={i}>{<ButtonValue value={props.person.values[i]}></ButtonValue>}</div>)
            }else{
                list.push(<div key={i}></div>)
            }
        }
        return list;
    }
    return (
        
        <div className="col"> 
            <div className="header">{props.person.name}</div>
            {
                listValues()
            }
        </div>
    );
}

export default Person;