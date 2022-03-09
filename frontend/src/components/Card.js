import React, {useState, useEffect} from "react";
import './Card.css'
import Person from './Person'

function Card(props){
    const [cards, setCards] = useState([{"id": 1,"name": "nubank","persons": [{"id": 1,"name":"Marcelo", "values": [250, 300, 50]}, {"id": 2, "name":"Joao", "values": [100, 50]}]}]);
    const [persons, setPersons] = useState([{"id": 1,"name":"Marcelo", "values": [250, 300, 50]},{"id": 3,"name":"Clara", "values": [100, 200, 50, 300, 350, 75, 15, 10]}, {"id": 2, "name":"Joao", "values": [100, 50]}]);
    
    useEffect( () => {
        // async function fetchData(){
        //     let res = await fetch('');
        // }
    });
    const calcMaior = () => {
        let aux = 0;
        for(let p of persons){
            if(p.values.length > aux) aux = p.values.length;
        }
        return aux;
    }

    var maior = calcMaior();
    
    return(
        <>
            <div className="cardName">{cards[props.id].name}</div>
            <div id="teste">
                {
                    persons.map((person) => <Person key={person.id} maior={maior} person={person}></Person>)
                }
            </div>
        </>
    );
}

export default Card;