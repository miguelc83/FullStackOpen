import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const addNote = (event) => {
    event.preventDefault()
    console.log(event.target)
    if (event.target[0].value === '') {
      alert('Please enter a note')
      return
    }
    else 
    {
    const newNote = {
      id: notes.length + 1,
      content: event.target[0].value,
      important: false
    }
    setNotes(notes.concat(newNote))
    event.target[0].value = ''
  }
}

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App 