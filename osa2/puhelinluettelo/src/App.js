import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddName from './components/AddName'
import nameService from './services/persons'


const Notification = ({ notification }) => {
  if (notification.message === null) {
    return null
  }

  const style = {
    color: notification.type === 'error' ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040 1234567', id: 1 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [notification, setNotification] = useState({
    message: null
  })


  useEffect(() => {
    nameService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])

  const notify = (message, type='success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification({ message: null }), 10000)
  }


  const poistaPerson = (id) => {
    const person = persons.find(n => n.id === id)
    const name = person.name
    if (window.confirm(`Delete ${name}?`)) {
      nameService
        .poista(id)
        .then(
          setPersons(persons.filter(n => n.id !== id))
        )
        notify(`Deleted ${person.name}`)
    }

  }


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
      notify(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject))


      nameService
        .create(nameObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewPhone('')
        })
        notify(`Added ${newName}`)
    }

  }




  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>
      <Notification notification={notification} />
      

      <AddName
        addName={addName}
        newName={newName}
        handleNamesChange={handleNamesChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>
      <Persons
        henkilot={persons}
        poistaPerson={poistaPerson} />

    </div >
  )
}

export default App
