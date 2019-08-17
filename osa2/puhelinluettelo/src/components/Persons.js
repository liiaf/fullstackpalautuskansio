import React from 'react'
import Person from './Person'

const Persons = ({henkilot, poistaPerson}) => {
    return (
        <div>
            {henkilot.map((person,i) => <Person key={i} nimi={person.name} 
            numero={person.number} id={i} poistaPerson={() => poistaPerson(person.id)}/>)}
            
        </div>
    )
}


export default Persons