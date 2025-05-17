import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '040-123456'
     },
    { name: 'Ada Lovelace',
      phone: '39-44-5323523'
     },
    { name: 'Dan Abramov',
      phone: '12-43-234345'
     },
    { name: 'Mary Poppendieck',
      phone: '39-23-6423122'
     },
    { name: 'John Doe',
      phone: '123-456-7890'
     },
    { name: 'Jane Smith',
      phone: '987-654-3210'
     },
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

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
    setFilteredPersons(persons.concat(nameObject))
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    const filtered = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredPersons(filtered)
  }


  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with: <input value={searchTerm} onChange={handleSearchChange} />
        </div>
      </form>
      <h2>Add a new</h2>     
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
        {filteredPersons.map((person, index) => (
          <li key={index}>{person.name} {person.phone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App