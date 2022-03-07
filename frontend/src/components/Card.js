import React, {useState} from "react";
import './Card.css'
import Person from './Person'

function Card(props){
    const [cards, setCards] = useState([{"id": 1,"name": "nubank","persons": [{"id": 1,"name":"Marcelo", "values": [250, 300, 50]}, {"id": 2, "name":"Joao", "values": [100, 50]}]}]);
    const [persons, setPersons] = useState([{"id": 1,"name":"Marcelo", "values": [250, 300, 50]},{"id": 3,"name":"Clara", "values": [100, 200, 50, 300, 350, 75, 15, 10]}, {"id": 2, "name":"Joao", "values": [100, 50]}]);
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
                {/* <table>
                    <caption>{cards[props.id].name}</caption>
                    <thead>
                        <tr>
                            {
                                cards[props.id].persons.map( (person) => <th key={person.id}>{person.name}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                // persons.map( (person) => <td key={persons.id}>{testFunction(persons.id)}</td>)
                                // cards[props.id].persons.map( (person) => <td key={person.id}>{testFunction(person.values)}</td>)
                                // cards[props.id].persons.map( (person) => <tr key={person.id}>{<Person person={person}></Person>}</tr>)
                                <Person></Person>
                            }
                    </tbody>
                </table> */}
                {
                    persons.map((person) => <Person key={person.id} maior={maior} person={person}></Person>)
                /* <div className="col">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <div className="col">
                    <div>5</div>
                    <div>6</div>
                    <div>3</div>
                </div> */}
            </div>
        </>
    );
}

export default Card;