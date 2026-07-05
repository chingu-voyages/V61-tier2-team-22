import { useState, useEffect } from 'react'
import './App.css'
import { getRandomWord } from "./components/utils/WordleUtils";
import Board from './components/game/Board';
import Keyboard from './components/game/Keyboard';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GameModal from './components/modal/GameModal';
import { WORDS } from './components/data/WordList';

const MAX_ROWS = 6;
const WORD_LENGTH = 5;

function App() {
  const [secretWord, setSecretWord] = useState(getRandomWord());
  const [board, setBoard] = useState(
    Array(MAX_ROWS).fill().map(() => Array(WORD_LENGTH).fill(""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedRows, setSubmittedRows] = useState([]);
const createEmptyBoard = () =>
  Array(MAX_ROWS).fill().map(() => Array(WORD_LENGTH).fill(""))
  // Use refs to track current state
  
function playAgain() {
    setBoard(createEmptyBoard());   // Clear board
    setCurrentRow(0);               // Reset row
    setCurrentCol(0);               // Reset column
    setSecretWord(getRandomWord()); // New secret word
    setGameOver(false);
    setGameWon(false);
    setShowModal(false);
    setSubmittedRows([]); 
  }
  // Update refs when state changes
  

  // Save stats to localStorage whenever they change
  
  const startNewGame = () => {
    setGameOver(false);
    setGameWon(false);
    setShowModal(false);
  }
  

  function handleKey (key) {
    
    if (key === "Backspace") {
      if (currentCol === 0) return;
      const newBoard = [...board] ;
      newBoard[currentRow][currentCol - 1] = "";
      setBoard(newBoard);
      setCurrentCol(currentCol - 1);
      return;
    }

    if (key === "Guess") {
      if (currentCol !== WORD_LENGTH) {
        alert("Word must be 5 letters.");
        return;
      }
      setSubmittedRows([...submittedRows, currentRow]);
      const guess = board[currentRow].join("");
      if (guess === secretWord) {
        //alert("You Win!");
        setGameWon(true);
        setGameOver(true);
        setShowModal(true);
        return ;
      }

      if (!WORDS.includes(guess)) {
        alert("Invalid word.");
        //return;
      }


      if (currentRow === MAX_ROWS-1) {
        setGameWon(false);
        setGameOver(true);
        setShowModal(true);
        return ;
        
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
    <div className="app-container">
      <Header />
      <main className="app-main">
        <div className="game-container">
          <button className="new-game-btn" onClick={startNewGame}>
            ➕ New Game
          </button>
          {gameOver && (
      <GameModal
        isOpen={showModal}
        isWin={gameWon}
        secretWord={secretWord}
        attempts={currentRow + (gameWon ? 1 : 0)}
        //stats={stats}
        onPlayAgain={playAgain}
      />
    )}
          <Board board={board} secretWord={secretWord} submittedRows={submittedRows}/>
          <Keyboard onKeyPress={handleKey}/>
        </div>
      </main>
      <Footer />
 
    </div>
  )
}

export default App;