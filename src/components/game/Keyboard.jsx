import { useState, useEffect } from "react";
import "./Keyboard.css";

export default function OnScreenKeyboard() {

    const [isDisabled, setIsDisabled] = useState(false);

    const toggleState = () => {
        setIsDisabled(!isDisabled);
    };

    const keyboardLayout = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Guess', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    function handleClick(key) {
        console.log({ key });
    }

    useEffect(() => {
        const whenKeyIsPressed = (event) => {
            if (event.key === 'Enter') {
                console.log('Guess entered ');
            }
            if (event.key === 'Backspace') {
                console.log('Letter was deleted')
            }
            if ((/^[a-zA-Z]$/.test(event.key))) {
                console.log('Key was pressed')
            }
        }
        window.addEventListener('keydown', whenKeyIsPressed);
        return () => {
            window.removeEventListener('keydown', whenKeyIsPressed);
        }; //cleanup function goes here 

    }, []);

    return (
        <div className="keyboard-container">
            <button
                className={`keyboard-toggle ${isDisabled ? "disabled" : ""}`}
                onClick={toggleState}
            >
                <p>Physical Keyboard Enabled</p>
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

