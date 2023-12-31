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
  console.log(props)
  return (
    <>
      <Part part = { props.part1 } exercises = { props.exercises1 } />
      <Part part = { props.part2 } exercises = { props.exercises2 } />
      <Part part = { props.part3 } exercises = { props.exercises3 } />
    </>
  )
}

/** Componente Part */
const Part = (props) => {
  return (
    <p>{ props.part } { props.exercises }</p>
  )
}

export default App