import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  /** Función Buenos Comentarios */
  const GoodComments = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    console.log('GoodComments', updatedGood)
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    console.log('AllComments', updatedAll)
  }

  /** Función Neutral */
  const NeutralComments = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1
    console.log('NeutralComments', updatedNeutral)
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
    console.log('AllComments', updatedAll)
  }

  /** Función Malos Comentarios */
  const BadComments = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    console.log('BadComments', updatedBad)
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
    console.log('AllComments', updatedAll)
  }

  /** Componente Results */
  const Results = () => {
    return (
      <div>
        <p>good { good }</p>
        <p>neutral { neutral }</p>
        <p>bad { bad }</p>
        <p>all { all }</p>
        <p>average { (good - bad) / all }</p>
        <p>positive { good / all * 100 } %</p>
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
      <Results text = 'results' />
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