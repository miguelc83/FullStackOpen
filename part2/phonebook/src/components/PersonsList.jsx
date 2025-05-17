const PersonsList = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.phone}
        </li>
      ))}
    </ul>
  )
}

export default PersonsList