import { useRef } from 'react'
import {generateRandomColor} from '../../src/index'
import './App.css'

function App() {
  const refButt = useRef(null)

  function changeColor (){

    const color = generateRandomColor();

    refButt.current.style.backgroundColor = color
  
  } 

  return (
      <div ref={refButt} className="div-background">
        <h1>GENERATE RANDOM HEX</h1>
        <div className="card">
          <button  onClick={changeColor}>
          Change color in one click!
          </button>
        </div>
      </div>
  )
}

export default App
