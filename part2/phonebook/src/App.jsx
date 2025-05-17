import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '040-123456'
     }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
 

const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phone: newNumber
    }
    if (!NameValidator(newName, persons)) {
      return
    }else if (newNumber === '') {
      alert('Please enter a number')
      return
    }
    // Check if the name already exists in the persons array
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // NameValidator function to check if the name is empty or already exists
  const NameValidator = (name, persons) => {
    if (name === '') {
      alert('Please enter a name')
      return false
    } else if (persons.map(person => person.name).includes(name)) {
      alert(`${name} is already added to phonebook`)
      return false
    } else {
      return true
    }

  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          phone: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.phone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App