import { useState } from 'react'


const Statistics = ({ positives, neutrals, negatives, allClicks }) => {
  // Calculate derived values directly in the render
  const average = allClicks > 0 ? (positives - negatives) / allClicks : 0
  const positivesPct = allClicks > 0 ? (positives / allClicks) * 100 : 0
  
  if (allClicks === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <h3>No feedback given, not enough data</h3>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <thead>
          <tr>
            <th>Feedback Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsRow text="Good" value={positives} />
          <StatisticsRow text="Neutral" value={neutrals} />
          <StatisticsRow text="Bad" value={negatives} />
          <StatisticsRow text="All" value={allClicks} />
          <StatisticsRow text="Average" value={average.toFixed(2)} />
          <StatisticsRow text="Positive Percentage" value={positivesPct.toFixed(2)} />
        </tbody>
      </table>
    </div>
  )
}

const CustomButton = ({ handleClick, texto }) => {
  return <button onClick={handleClick}>{texto}</button>
}

const StatisticsRow = ({ text, value }) => {
  return (
      <tr>
        <td style={{ marginRight: '10px' }}>{text}</td>
        <td style={{ marginRight: '10px', textAlign: 'center' }}>{value}</td>
      </tr>
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
        <CustomButton handleClick={() => buttonClick('good')} texto="Good" />
        <CustomButton handleClick={() => buttonClick('neutral')} texto="Neutral" />
        <CustomButton handleClick={() => buttonClick('bad')} texto="Bad" />

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