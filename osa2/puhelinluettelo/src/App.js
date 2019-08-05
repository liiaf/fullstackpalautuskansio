import React, { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040 1234567', id: 1 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const rows = () => persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)

  const handleNamesChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }
    if (persons.find(person => person.name === newName)) {
      setNewName("")
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewPhone("")
    }

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
        <div>number: <input
          value={newPhone}
          onChange={handlePhoneChange}
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
