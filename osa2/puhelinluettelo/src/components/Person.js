import React from 'react'

const Person = ({ nimi, numero, id, poistaPerson }) => {
  return (
    <div>
    {nimi} {numero} <button name={nimi} id={id} onClick={poistaPerson} >delete</button>
     </div>
    
  )
}

export default Person