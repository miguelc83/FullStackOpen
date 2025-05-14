// The Hello component uses destructuring to extract the 'name' and 'age' properties
// directly from the props object passed to it.
const Hello = ({ name, age }) => {
  // Logs the name and age to the console for debugging purposes.
  console.log(name, age)

  // Defines a function to calculate the year of birth based on the current year and the age.
  // This function uses the 'age' value destructured from props.
  const bornYear = () => new Date().getFullYear() - age

  // Returns a JSX structure that displays a greeting message and the calculated year of birth.
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

// The App component demonstrates the use of destructuring in various contexts.
const App = () => {
  // Defines a 'person' object with multiple properties, including nested objects and arrays.
  const person = {  
    name: 'Arto Hellas', // Name of the person
    age: 35, // Age of the person
    hobbies: ['HTML', 'CSS', 'JavaScript'], // Array of hobbies
    education: { // Nested object representing education details
      degree: 'Master',
      major: 'Computer Science',
      university: 'University of Helsinki',
      year: 2010
    },
  }

  // Returns a JSX structure that renders the Hello component twice.
  // The first instance passes hardcoded values, while the second uses destructured properties from the 'person' object.
  return (
    <div>
      <h1>Greetings</h1>
      {/* Passes hardcoded values to the Hello component. The age is calculated dynamically. */}
      <Hello name="Maya" age={26 + 10} />
      {/* Passes destructured properties from the 'person' object to the Hello component. */}
      <Hello name={person.name} age={person.age} />
    </div>
  )
}

// Exports the App component as the default export of this module.
export default App
