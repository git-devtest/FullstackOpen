import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  /** Función Buenos Comentarios */
  const GoodComments = () => {
    const updatedGood = good + 1
    console.log('GoodComments', updatedGood)
    setGood(updatedGood)
  }

  /** Función Neutral */
  const NeutralComments = () => {
    const updatedNeutral = neutral + 1
    console.log('NeutralComments', updatedNeutral)
    setNeutral(updatedNeutral)
  }

  /** Función Malos Comentarios */
  const BadComments = () => {
    const updatedBad = bad + 1
    console.log('BadComments', updatedBad)
    setBad(updatedBad)
  }

  /** Componente Statistics */
  const Statistics = () => {
    return (
      <div>
        <p>good { good }</p>
        <p>neutral { neutral }</p>
        <p>bad { bad }</p>
      </div>
    )
  }

  return (
    <div>
      <Header text = 'give feedback' />

      <Button text = 'good' handleClick = { GoodComments } />
      <Button text = 'neutral' handleClick = { NeutralComments } />
      <Button text = 'bad' handleClick = { BadComments } />

      <Header text = 'statistics' />
      <Statistics text = 'statistics' />
    </div>
  )

}

/** Componente Header */
const Header = ({ text }) => <h1>{text}</h1>

/** Componente Button */
const Button = ({ text, handleClick }) => (
  <button onClick = { handleClick }>{ text }</button>
)

export default App