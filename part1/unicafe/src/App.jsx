// Importing the `useState` hook from React to manage state in the functional component.
import { useState } from 'react'

const App = () => {
  const [positives, setLeft] = useState(0)
  const [neutrals, setNeutral] = useState(0)
  const [negatives, setRight] = useState(0)
  
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      
      <h1>Statistics</h1>
      <p>Good: {positives}</p>
      <p>Neutral: {neutrals}</p>
      <p>Bad: {negatives}</p>
      <p>All: {positives + neutrals + negatives}</p>
    </div>
  )
}

// Exporting the `App` component as the default export of this module.
export default App