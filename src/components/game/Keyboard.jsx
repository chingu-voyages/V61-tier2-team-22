import { useState, useEffect } from "react";
import "./Keyboard.css";

export default function OnScreenKeyboard() {

    const [isDisabled, setIsDisabled] = useState(false);

    const toggleState = () => {
        setIsDisabled(!isDisabled);
    };

    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Guess', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
    ];

    function handleClick(key) {
        console.log({ key });
    }

    useEffect(() => {
        const whenKeyIsPressed = (event) => {
            if (isDisabled) {
                console.log('Physical Keyboard not in use.');
                return;
            }
            if (event.key === 'Enter') {
                handleClick('Guess');
                console.log('Guess entered ');
            }
            if (event.key === 'Backspace') {
                handleClick('Backspace');
                console.log('Letter was deleted')
            }
            if ((/^[a-zA-Z]$/.test(event.key))) {
                handleClick(event.key.toUpperCase());
                console.log('Key was pressed');
            }
        }
        window.addEventListener('keydown', whenKeyIsPressed);
        return () => {
            window.removeEventListener('keydown', whenKeyIsPressed);
        };

    }, [isDisabled]);

    return (
        <div className="keyboard-container">
            <button
                className={`keyboard-toggle ${isDisabled ? "disabled" : ""}`}
                onClick={toggleState}
            >
                {isDisabled ? "Physical Keyboard Disabled" : "Phsyical Keyboard Enabled"}
            </button>

            <div className="keyboard-rows">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key) => (
                            <button key={key} className="keyboard-key" onClick={() => handleClick(key)}>
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}

