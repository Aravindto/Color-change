import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { InputField } from './components/InputField'

function App() {
  const [color, setColor] = useState('');
  const [isDarkText, setDarkText] = useState(true);
  const [hexValue, setHexValue] = useState('');

  return (
    <div className='app'>
      <Square color={color} isDarkText={isDarkText} hexValue={hexValue} />
      <InputField setColor={setColor} isDarkText={isDarkText} setDarkText={setDarkText} setHexValue={setHexValue} />
    </div>
  )
}

export default App
