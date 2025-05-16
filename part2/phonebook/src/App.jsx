import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    if (!NameValidator(newName, persons)) {
      return
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App