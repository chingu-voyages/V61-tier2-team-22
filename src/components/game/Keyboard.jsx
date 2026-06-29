import { useState, useEffect } from "react";
import "./KeyBoard.css";
export default function Keyboard({onKeyPress}) {

    const [isDisabled, setIsDisabled] = useState(false);

    const toggleState = () => {
        setIsDisabled(!isDisabled);
    };

    const keyboardLayout = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Guess', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    useEffect(() => {
        if (isDisabled) return;

        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                onKeyPress("Guess");
                return;
            }

            if (e.key === "Backspace") {
                onKeyPress("Backspace");
                return;
            }

            if (/^[a-zA-Z]$/.test(e.key)) {
                onKeyPress(e.key.toLowerCase());
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isDisabled, onKeyPress]);

    return (
        <div className="keyboard-container">
            <button
                className={`keyboard-toggle ${isDisabled ? "disabled" : ""}`}
                onClick={toggleState}
            >
                 {isDisabled ? "Physical Keyboard Disabled" : "Physical Keyboard Enabled"}
            </button>
            <div className="keyboard-rows">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key) => (
                            <button key={key} className="keyboard-key" onClick={() => onKeyPress(key)}>
                                {key}
                            </button>
                            
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}
