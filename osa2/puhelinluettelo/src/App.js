import React, { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('')

  const rows = () => persons.map(person => <li key={person.id}>{person.name}</li>)

  const handleNamesChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }
   

    setPersons(persons.concat(nameObject))
    setNewName('')

  }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNamesChange}
          />
        </div>
        <button type="submit">add</button>
      </form>


      <h2>Numbers</h2>

        
        {rows()}
        
      

    </div >
  )


}

export default App
