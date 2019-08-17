import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddName from './components/AddName'
import nameService from './services/persons' 




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040 1234567', id: 1 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    nameService
    .getAll()
      .then(initialNames => {
      setPersons(initialNames)
    })
}, [])



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
      setNewPhone("")
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject))


      nameService
      .create(nameObject)
        .then(returnedName => {
        setPersons(persons.concat(returnedName))
        setNewName('')
        setNewPhone('')
      })
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>

      <AddName
        addName={addName}
        newName={newName}
        handleNamesChange={handleNamesChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>
      <Persons henkilot={persons} />


    </div >
  )


}

export default App
