const AddForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addName }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        <br />
        phone: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default AddForm