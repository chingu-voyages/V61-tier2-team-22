import "./Board.css";

export default function Board({ board, secretWord }) {

    function getColor(letter,index,row){

        if(row.includes("")) return "";

        if(secretWord[index]===letter)
            return "green";

        if(secretWord.includes(letter))
            return "yellow";

        return "gray";

    }

    return(

        <div className="board">

            {board.map((row,rowIndex)=>(

                <div className="board-row" key={rowIndex}>

                    {row.map((letter,colIndex)=>(

                        <div
                            key={colIndex}
                            className={`tile ${getColor(letter,colIndex,row)}`}
                        >

                            {letter}

                        </div>

                    ))}

                </div>

            ))}

        </div>

    );

}