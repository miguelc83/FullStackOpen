// Importing the `useState` hook from React to manage state in the functional component.
import { useState } from 'react'

// The `Display` component is a simple functional component that uses destructuring
// to directly access the `counter` prop passed to it.
const Display = ({ counter }) => <div>{counter}</div>

// The `Button` component is another functional component that receives props.
// It uses destructuring to simplify access to `handleClick` and `text` props.
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

// The main `App` component where the application logic resides.
const App = () => {
  // Using the `useState` hook to create a state variable `counter` and its updater function `setCounter`.
  // The initial value of `counter` is set to 0.
  const [counter, setCounter] = useState(0)

  // Function to increment the `counter` state by 1.
  const increaseByOne = () => setCounter(counter + 1)

  // Function to decrement the `counter` state by 1.
  const decreaseByOne = () => setCounter(counter - 1)

  // Function to reset the `counter` state to 0.
  const setToZero = () => setCounter(0)

  // The `App` component returns a JSX structure that renders the `Display` and `Button` components.
  // The `Display` component shows the current value of `counter`.
  // The `Button` components are used to trigger the state update functions.
  return (
    <div>
      {/* Passing the `counter` state as a prop to the `Display` component. */}
      <Display counter={counter} />

      {/* Passing the `increaseByOne` function and button text as props to the `Button` component. */}
      <Button handleClick={increaseByOne} text="plus" />

      {/* Passing the `decreaseByOne` function and button text as props to the `Button` component. */}
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  )
}

// Exporting the `App` component as the default export of this module.
export default App