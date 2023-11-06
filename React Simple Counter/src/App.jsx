
import { useState, useEffect } from 'react'
import SimpleCounter from "./SimpleCounter"
import calculateSeconds from "./lib/time.js"


function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    // component mounting

    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)

    // component unmount

    return () => clearInterval(interval)
  }, [counter])

  // if there is no dependancy array, it will just change as needed
  // an empty dependancy array, will just run once 
  // array with a state variable: will only update when the state changes like with the setInterval declared which made it run every second


  return (
    <>
      <SimpleCounter
        thousandsDigit = {calculateSeconds(counter, 1000)}
        hundredsDigit = {calculateSeconds(counter, 100)}
        tensDigit = {calculateSeconds(counter, 10)}
        onesDigit = {calculateSeconds(counter, 1)}
      />
    </>
  )
}

export default App
