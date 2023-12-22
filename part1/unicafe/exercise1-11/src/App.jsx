import { useState } from 'react'

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [all, setAll] = useState(0)

  /** Objeto Estadísticas que almacena y realiza los cálculos que suministra el componente */
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
        <div>
          <table>
            <tbody>

              <tr>
                <td>good</td>
                <td>{ statistics.good }</td>
              </tr>

              <tr>
                <td>neutral</td>
                <td>{ statistics.neutral }</td>
              </tr>

              <tr>
                <td>bad</td>
                <td>{ statistics.bad }</td>
              </tr>

              <tr>
                <td>all</td>
                <td>{ statistics.all }</td>
              </tr>

              <tr>
                <td>average</td>
                <td>{ statistics.average }</td>
              </tr>

              <tr>
                <td>positive</td>
                <td>{ statistics.positive + '%' }</td>
              </tr>

            </tbody>
          </table>
        </div>
      )
    }
  }

  return (
    <>
      <Header text = "give feedback" />
      <Button text = "good" handleClick = { GoodComments } />
      <Button text = "neutral" handleClick = { NeutralComments } />
      <Button text = "bad" handleClick = { BadComments } />
      <Header text = "statistics" />

      { feedbackConditional() }

    </>
  )
}

/** Componente para renderizar título */
const Header = ({ text }) => <h1> { text } </h1>

/** Componente para renderizar botón */
const Button = ({ text, handleClick }) => <button onClick = { handleClick }> { text } </button>

/** Componente para renderizar mensaje */
const Message = ({ message }) => <p> { message } </p>

export default App
