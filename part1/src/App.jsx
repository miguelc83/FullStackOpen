const Header = (props) => {
  console.log("Header comoponent rendered")
  return (
    //added id for debugging
    <h1 id="Header">{props.course}</h1>
  )
}
const Content = (props) => {
  console.log("Content comoponent rendered")
  console.log(props.parts)
  return (
    //added id for debugging
    <div id="Content">
      {props.parts.map((part) => {
        return (
          <Part part={part}  />
        )
      })}    
      
    </div>
  )
}
const Total = (props) => {
  console.log("Part comoponent rendered")
  console.log(props.parts)
  let exercises = 0

  props.parts.forEach(element => {
    exercises += element.exercises
  })

  return (
    //added id for debugging
    <p id="Total">Number of exercises {exercises}</p>
  )
}

const Part = (props) => { 
  console.log("Part comoponent rendered")
  console.log(props.part)
  return (
    //added id for debugging
    <p id="Part">{props.part.name} = {props.part.exercises}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}

export default App