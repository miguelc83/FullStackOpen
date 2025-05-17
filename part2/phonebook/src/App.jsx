import { useState } from 'react'
import SearchForm from './components/SearchForm'
import AddForm from './components/AddForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '987-654-3210' },
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, phone: newNumber }
    if (!NameValidator(newName, persons)) return
    if (newNumber === '') {
      alert('Please enter a number')
      return
    }
    setPersons(persons.concat(nameObject))
    setFilteredPersons(filteredPersons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const NameValidator = (name, persons) => {
    if (name === '') {
      alert('Please enter a name')
      return false
    } else if (persons.map(person => person.name).includes(name)) {
      alert(`${name} is already added to phonebook`)
      return false
    }
    return true
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
      <SearchForm searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <AddForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons} />
    </div>
  )
}

export default App