import { useState, useEffect } from 'react'
import Filter from './components/Filter/Filter.js'
import PersonForm from './components/PersonForm/PersonForm.js'
import Persons from './components/Persons/Persons.js'
import numberService from './services/numbers.js'
import Notification from './components/ErrorMessage/ErrorMessage.js'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {

      numberService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessageColor, setErrorMessageColor] = useState("green")

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id:persons.length+1,
    }
    
    const nameExists = persons.filter(person => person.name === newName)

    if(nameExists.length>0){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)){

        const id = nameExists[0].id
        const person = persons.find(p => p.id === id)
        const changedNumber = { ...person, number: newNumber }
    
        numberService
          .update(id, changedNumber)
          .then(returnedNumber => {
            setPersons(persons.map(person => person.id !== id ? person : returnedNumber))
            setErrorMessage(
              `'${person.name} phone number was changed'`
            )
            setErrorMessageColor("green")
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            if(error.response.statusText==="Not Found"){
              setErrorMessage(
                `'Information of ${person.name} has alredy been removed from server'`
              )
              setErrorMessageColor("red")
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            }
          })
      }
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      
      numberService
      .create(personObject)
      .then(response => {
        setErrorMessage(
          `Added '${response.name}'`
        )
        setErrorMessageColor("green")
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })

    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handlesFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const handleDelete = (id) =>{
    numberService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id).map(person => person)) 
      })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} color={errorMessageColor} />
      <Filter {...{filter,handlesFilterChange}} />

      <h3>Add a new</h3>

      <PersonForm {...{addPerson,newName,newNumber,handleNameChange,handleNumberChange}}/>

      <h3>Numbers</h3>

      <Persons {...{persons,filter,handleDelete}}/>
    </div>
  )
}

export default App