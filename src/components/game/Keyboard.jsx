import { useState, useEffect } from "react";
import './Keyboard.css';
export default function Keyboard({onKeyPress}) {

    const [physicalDisabled, setPhysicalDisabled] = useState(false);

    const togglePhysicalKeyboard = () => {
        setPhysicalDisabled(!physicalDisabled);
    };

    const keyboardLayout = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Guess', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    useEffect(() => {
        if (physicalDisabled) return;

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
    }, [physicalDisabled, onKeyPress]);

    

    return (
        <div className="keyboard-container">
            <button
                className={`keyboard-toggle ${physicalDisabled ? "disabled" : ""}`}
                onClick={togglePhysicalKeyboard}
            >
                 {physicalDisabled ? "🔒 Physical Keyboard Disabled" : "⌨️ Physical Keyboard Enabled"}
            </button>
            <div className="keyboard-rows">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key) => (
                            <button 
                                key={key} 
                                className="keyboard-key" 
                                onClick={() => onKeyPress(key)}
                                
                            >
                                {key}
                            </button>
                            
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}
