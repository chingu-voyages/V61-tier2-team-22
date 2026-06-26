
import OnScreenKeyboard from './components/game/Keyboard'
import { useState } from 'react'
import './App.css'
import { getRandomWord } from "./utils/WordleUtils";


function App() {
  const [secretWord, setSecretWord] = useState(getRandomWord());

  const startNewGame = () => {
    setSecretWord(getRandomWord());
  }

  return (    
    <>
      <h1>Wordle</h1>
      <button onClick={startNewGame}>
        New Game
      </button>
     <OnScreenKeyboard />
    </>

  )
}

export default App;
