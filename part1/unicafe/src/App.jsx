import { useState } from 'react'


const Statistics = ({ positives, neutrals, negatives, allClicks }) => {
  // Calculate derived values directly in the render
  const average = allClicks > 0 ? (positives - negatives) / allClicks : 0
  const positivesPct = allClicks > 0 ? (positives / allClicks) * 100 : 0

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {positives}</p>
      <p>Neutral: {neutrals}</p>
      <p>Bad: {negatives}</p>
      <p>All: {allClicks}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive Percentage: {positivesPct.toFixed(2)} %</p>
    </div>
  )
}

const App = () => {
  const [positives, setPositives] = useState(0)
  const [neutrals, setNeutral] = useState(0)
  const [negatives, setNegatives] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

  // Handler for button clicks
  const buttonClick = (type) => {
    // Update the appropriate state based on the feedback type
    if (type === 'good') setPositives((positives) => positives + 1)
    else if (type === 'neutral') setNeutral((neutrals) => neutrals + 1)
    else if (type === 'bad') setNegatives((negatives) => negatives + 1)

    // Increment the total number of clicks
    setAllClicks((prev) => prev + 1)
  }
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => buttonClick('good')}>Good</button>
      <button onClick={() => buttonClick('neutral')}>Neutral</button>
      <button onClick={() => buttonClick('bad')}>Bad</button>

      <Statistics
        positives={positives}
        neutrals={neutrals}
        negatives={negatives}
        allClicks={allClicks}
      />
    </div>
  )
}

export default App