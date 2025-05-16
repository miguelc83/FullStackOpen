const Course = ({ course }) => {
  const Header = ({ course }) => <h1>{course.name}</h1>
  const Content = ({ parts }) => (
    <>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  )
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p><strong>Number of exercises {total}</strong></p>
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default Course