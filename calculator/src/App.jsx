import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { InputField } from './components/InputField'

function App() {
  const [result, setResult] = useState('');

  const handleCheck = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = (e) => {
    setResult("")
  }

  const backspace = (e) => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <>
      <div className='container'>
        <form>
          <input type='text' value={result} />
        </form>
        <div className='keypad'>
          <button className='highlight' onClick={clear} id='clear'>Clear</button>
          <button className='highlight' onClick={backspace} id='backspace'>c</button>
          <button className='highlight' name='/' onClick={handleCheck}>&divide;</button>
          <button name='7' onClick={handleCheck}>7</button>
          <button name='8' onClick={handleCheck}>8</button>
          <button name='9' onClick={handleCheck}>9</button>
          <button className='highlight' name='+' onClick={handleCheck}>&times;</button>
          <button name='4' onClick={handleCheck}>4</button>
          <button name='5' onClick={handleCheck}>5</button>
          <button name='6' onClick={handleCheck}>6</button>
          <button className='highlight' name='-' onClick={handleCheck}>&ndash;</button>
          <button name='1' onClick={handleCheck}>1</button>
          <button name='2' onClick={handleCheck}>2</button>
          <button name='3' onClick={handleCheck}>3</button>
          <button className='highlight' name='+' onClick={handleCheck}>+</button>
          <button name='0' onClick={handleCheck}>0</button>
          <button name='.' onClick={handleCheck}>.</button>
          <button className='highlight' onClick={calculate} id="result">=</button>

        </div>
      </div>
    </>
  )
}

export default App
