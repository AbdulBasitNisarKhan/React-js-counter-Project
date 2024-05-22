import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 0;

  let [counter, setCounter] = useState(0)
  // counter is a variable we increase or decrease its value
  // setCounter is a function its display counter value 
  // useState is a hook and initialize counter value
  const increase = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  }

  const decrease = () => {
    console.log("clicked", counter);
    if (counter >= 1)
      counter = counter - 1;
    setCounter(counter)
  }



  return (
    <>

      <h1>Vite + React Counter Project {counter}</h1>
      <br />
      <button onClick={increase}>Increase counter {counter}</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease counter {counter}</button>

    </>
  )
}

export default App
