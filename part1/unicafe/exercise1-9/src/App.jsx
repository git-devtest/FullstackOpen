import { useState } from 'react'

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [all, setAll] = useState(0)

  /** Objeto Estadísticas que almacena y realiza los cálculos que suministra el componente a través de los Props*/
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: (good - bad) / all,
    positive: good / all * 100
  }

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

  /** Función Condicional para renderizar estadísticas */
  const feedbackConditional = () => {
    if (statistics.all === 0) {
      return (
        <Message message = 'No feedback given' />
      )
    } else {
      return (
        <Statistics 
          good = { statistics.good }
          neutral = { statistics.neutral }
          bad = { statistics.bad }
          all = { statistics.all }
          average = { statistics.average }
          positive = { statistics.positive }
        />
      )
    }
  }

  return (
    <div>
      <Header text = 'give feedback' />

      <Button handleClick = { GoodComments } text = 'good' />
      <Button handleClick = { NeutralComments } text = 'neutral' />
      <Button handleClick = { BadComments } text = 'bad' />
      
      <Header text = 'statistics' />

      { feedbackConditional() }
      
    </div>
  )
}

/** Componente para renderizar botón */
const Button = ({ handleClick, text }) => {
  return (
    <button onClick = { handleClick }>{ text }</button>
  )
}

/** Componente para renderizar título */
const Header = ({ text }) => <h1>{ text }</h1>

/** Componente para renderiza mensaje */
const Message = ({ message }) => <p>{ message }</p>

/** Componente para renderizar estadísticas */
const Statistics = (props) => {
  return (
    <div>
      <p>good { props.good }</p>
      <p>neutral { props.neutral }</p>
      <p>bad { props.bad }</p>
      <p>all { props.all }</p>
      <p>average { props.average }</p>
      <p>positive { props.positive } %</p>
    </div>
  )
}

export default App
