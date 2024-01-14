import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../helper/CheckWinner";

function Grid({ numberOfCards }) {
    const [bord, setBord] = useState(Array(numberOfCards).fill(""));
    const [turn, setturn] = useState(true);
    const [winner, setWinner] = useState(null);
    function play(index) {
        if (turn == true) {
            bord[index] = "O";
        } else {
            bord[index] = "X";
        }
        const win = isWinner(bord, turn ? "O" : "X");
        if (win) {
            setWinner(win);
        }
        setBord([...bord]);
        setturn(!turn)
    }
    function Reset(){ 
        setWinner(null);
        setturn(true);
        setBord(Array(numberOfCards).fill(""));
    }
    return (
        <div className="w-full flex justify-center items-center">
            <div>
            {
                winner && (
                    <>
                        <h1 className="text-white text-2xl">Winner is : {winner}</h1>
                        <button onClick={Reset} className=" text-2xl border-2 border-green-400 text-yellow-300 ">Reset Game </button>
                    </>
                )
            }
            
                <h1 className=" text-white text-2xl md:text-3xl pb-5 font-mono font-bold "> Current Turn : {(turn) ? "O" : "X"}</h1>
                <div className=" grid grid-cols-3 gap-3  w-[90%] md:w-[500px]">
                    {bord.map((el, idx) => <Card GameEnd={winner? true : false} key={idx} onPlay={play} player={el} index={idx} />)}
                </div>
            </div>
        </div>
    )
}
export default Grid;