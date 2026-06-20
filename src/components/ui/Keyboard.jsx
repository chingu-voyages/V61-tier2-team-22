import { useState } from "react";

export default function OnScreenKeyboard() {

    const [isDisabled, setIsDisabled] = useState(false);

    //Keyboard Toggle View
    const toggleState = () => {
        setIsDisabled(!isDisabled);
    };

    //Keyboard Layout Arrays 
    const keyboardLayout = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Guess', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    return (
        <div className="keyboard-container">
            <button className="keyboard-toggle" onClick={toggleState}>
                <p>Physical Keyboard Enabled</p>
            </button>
            <div className="keyboard-rows">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key) => (
                            <button key={key} className="keyboard-key">
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

