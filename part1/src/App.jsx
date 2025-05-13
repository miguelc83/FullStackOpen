const Header = (props) => {
  console.log("Header comoponent rendered")
  return (
    //added id for debugging
    <h1 id="Header">{props.course}</h1>
  )
}
const Content = (props) => {
  console.log("Content comoponent rendered")
  console.log(props)
  return (
    //added id for debugging
    <div id="Content">
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}
const Total = (props) => {
  console.log("Total comoponent rendered")
  return (
    //added id for debugging
    <p id="Total">Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const Part = (props) => {
  console.log("Part comoponent rendered")
  console.log(props)
  return (
    //added id for debugging
    <p id="Part">{props.part.name} = {props.part.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}  />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App