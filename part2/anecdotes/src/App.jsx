import { useState, useEffect, use } from 'react'


const RandomButton = ({ anecdotes, setSelected }) => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
  return (
    <button onClick={handleClick}>
      Next anecdote
    </button>
  )
}
const VoteButton = ({ selected, setVotes, votes }) => {
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  return (
    <button onClick={handleVote}>
      Like
    </button>
  )
}
const MostVotes = ({ anecdotes, maxVotes, mostVotedIndex }) => {
  if (maxVotes === 0) {
    return <p>No votes yet</p>
  }
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'The only thing worse than a user who doesn\'t read the manual is a developer who doesn\'t read the spec.',
    
  ]
 
  const [selected, setSelected] = useState(0)  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const maxVotes = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(maxVotes)


  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} </p>
      </div>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="Next anecdote" />
      <Button handleClick={() => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
      }} text="Like" />

      <div >
        
        <MostVotes anecdotes={anecdotes} maxVotes={maxVotes} mostVotedIndex={mostVotedIndex} />
      </div>
    </div>
  )
}

export default App