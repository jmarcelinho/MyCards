import React, {useState} from "react";

function Person(props){
    const createElem = () => {
        var list = [];
        for(const value of props.person.values){
            list.push(value);
        }
        return list;
    }
    return (
        <> 
            {/* <th>{props.persons.name}</th> */}
            <th>{props.person.name}</th>
            {
                createElem().map((value) => <td>{value}</td>)
            }
        </>
    );
}

export default Person;