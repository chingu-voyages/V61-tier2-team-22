import { useState } from 'react'
import './App.css'
import { getRandomWord } from "./utils/WordleUtils";
import Board from './kboard/Board';
import Keyboard from './kboard/KeyBoard';
import { WORDS } from './data/WordList';
function App() {
  const [secretWord, setSecretWord] = useState(getRandomWord());

  const startNewGame = () => {
    setSecretWord(getRandomWord());
  }
const MAX_ROWS = 6;
const WORD_LENGTH = 5;

const [board, setBoard] = useState(
    Array(MAX_ROWS).fill().map(() => Array(WORD_LENGTH).fill(""))
  );

  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  function handleKey(key) {

    if (key === "Backspace") {
      if (currentCol === 0) return;

      const newBoard = [...board];
      newBoard[currentRow][currentCol - 1] = "";

      setBoard(newBoard);
      setCurrentCol(currentCol - 1);
      return;
    }

    if (key === "Guess") {

      if (currentCol !== WORD_LENGTH) {
        alert("Word must be 5 letters.");
        return ;
        
      }

      const guess = board[currentRow].join("");

      if (!WORDS.includes(guess)) {
        alert("Invalid word.");
      }

      if (guess === secretWord) {
        alert("You Win!");
        return ;
      }

      if (currentRow === MAX_ROWS - 1) {
        alert(`Game Over. Word was ${secretWord}`);
        return;
      }

      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
      return;
    }

    if (currentCol >= WORD_LENGTH) return;

    const newBoard = [...board];
    newBoard[currentRow][currentCol] = key.toUpperCase();

    setBoard(newBoard);
    setCurrentCol(currentCol + 1);
   
  }

  return (
    <>
      <h1>Wordle</h1>
      <button onClick={startNewGame}>
        New Game
      </button>
      <Board board={board} secretWord={secretWord}/>
      <Keyboard onKeyPress={handleKey}/>
      
    </>
  )
}

export default App ;
