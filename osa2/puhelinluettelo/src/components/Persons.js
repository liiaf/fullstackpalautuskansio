import React from 'react'
import Person from './Person'

const Persons = ({henkilot}) => {
    return (
        <div>
            {henkilot.map((person,i) => <Person key={i} nimi={person.name} numero={person.number} />)}
            
        </div>
    )
}


export default Persons