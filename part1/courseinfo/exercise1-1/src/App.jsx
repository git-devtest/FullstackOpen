const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = { course } />

      <Content part1 = { part1 } exercises1 = { exercises1 } />
      <Content part2 = { part2 } exercises2 = { exercises2 } />
      <Content part3 = { part3 } exercises3 = { exercises3 } />

      <Total total = { exercises1 + exercises2 + exercises3 } />
    </div>
  )
}

/** Componente Header */
const Header = (props) => {
  console.log(props)
  return (
    <h1>{ props.course }</h1>
  )
}

/** Componente Content */
const Content = (props) => {
  return (
    console.log(props),
    <>
      <p>{ props.part1 } { props.exercises1 }</p>
      <p>{ props.part2 } { props.exercises2 }</p>
      <p>{ props.part3 } { props.exercises3 }</p>
    </>
  )
}

/** Componente Total */
const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises { props.total }</p>
  )
}
 
export default App