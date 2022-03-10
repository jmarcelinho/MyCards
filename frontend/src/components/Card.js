import React, {useState, useEffect} from "react";
import './Card.css'
import Person from './Person'

function Card(props){
    const [cards, setCards] = useState([{"name": "Loading"}]);
    const [persons, setPersons] = useState([]);
    
    useEffect( () => {
        async function fetchData(){
            let resp = await fetch('http://localhost:3000/cards/');
            let cardsReq = await resp.json();
            console.log(cardsReq);
            setCards(cardsReq);
        }
        fetchData()
    }, [props.id]);
    
    useEffect( () => {
        async function fetchData(){
            let resp = await fetch('http://localhost:3000/persons/' + (props.id + 1));
            let personsReq = await resp.json();
            setPersons(personsReq);
        }
        console.log("teste");
        fetchData()
    }, [props.id]);

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