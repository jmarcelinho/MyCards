import React, {useState} from "react";
import './Card.css'
import Person from './Person'

function Card(props){
    const [cards, setCards] = useState([{"id": 1,"name": "nubank","persons": [{"id": 1,"name":"Marcelo", "values": [250, 300, 50]}, {"id": 2, "name":"Joao", "values": [100, 50]}]}]);

    const testFunction = (person_values) => {
        // var card = cards[0];
        return person_values.map( (value) => <tr>{value}</tr>)
    }
    return(
        <div>
            <table>
                <caption>{cards[props.id].name}</caption>
                {/* <thead>
                    <tr>
                        {
                            cards[props.id].persons.map( (person) => <th key={person.id}>{person.name}</th>)
                        }
                    </tr>
                </thead> */}
                <tbody>
                        {
                            // persons.map( (person) => <td key={persons.id}>{testFunction(persons.id)}</td>)
                            // cards[props.id].persons.map( (person) => <td key={person.id}>{testFunction(person.values)}</td>)
                            cards[props.id].persons.map( (person) => <tr key={person.id}>{<Person person={person}></Person>}</tr>)
                        }
                </tbody>
            </table>
        </div>
    );
}

export default Card;