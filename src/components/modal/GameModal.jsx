import './GameModal.css';

export default function GameModal({ 
  isOpen, 
  isWin, 
  secretWord, 
  attempts, 
  onPlayAgain 
}) {
  if (!isOpen) return null;

 

  return (
    <div className="modal-overlay" onClick={onPlayAgain}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-header ${isWin ? 'win' : 'lose'}`}>
          <h2 className="modal-title">
            {isWin ? '🎉 Congratulations!' : '😢 Better Luck Next Time'}
          </h2>
        </div>

        <div className="modal-body">
          {isWin ? (
            <p className="modal-message">
              You guessed the word in <strong>{attempts} {attempts === 1 ? 'attempt' : 'attempts'}</strong>!
            </p>
          ) : (
            <div className="modal-message">
              <p>The word was <strong>{secretWord.toUpperCase()}</strong></p>
            </div>
          )}

        </div>

        <div className="modal-footer">
          <button className="play-again-btn" onClick={onPlayAgain}>
            🔄 Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
