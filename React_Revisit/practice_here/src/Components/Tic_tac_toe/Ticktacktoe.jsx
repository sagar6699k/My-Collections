import './Ticktacktoe.css';
import { useEffect, useState } from "react"
import Box from './Box';
import { Patterns } from './Patterns';

const Ticktacktoe = () => {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "",]);
    const [player, setPlayer] = useState("X");
    const [result, setResult] = useState({winner:"none", state:"none"});


    useEffect(() => {
        CheckWin()
        CheckTie()

        console.log(board);
        if (player === "X") {
            setPlayer("O")
        }
        else {
            setPlayer("X")
        }
    }, [board]);

    
    useEffect(() => {
        if (result.state !== "none") {
            alert(`Game Over! The winner is ${result.winner}`)
            restartGame();
        }
    }, [result]);
    



    const chooseBox = (box) => {
        setBoard(board.map((val, index) => {
            if (index === box && val === "") {
                return player;
            }

            return val;
        }))

    }



    const CheckWin = () => {
        Patterns.forEach(currentPattern => {
            const currentPlayer = board[currentPattern[0]];
            if (currentPlayer === "") return;

            let winningStatus = true;
            currentPattern.forEach(indx => {
                if (board[indx] !== currentPlayer) {
                    winningStatus = false;
                }
            });

            if (winningStatus) {
                setResult({winner: player, state: "won"})
            }
        });
    }


    const CheckTie = () => {
        let filled = true;

        board.forEach((box) => {
            if (box === "") {
                filled = false;
            }
        });

        if (filled) {
            setResult({winner: "No One, because Tie", state: "Tie"})
        }
    }

    const restartGame = () => {
        setBoard(["", "", "", "", "", "", "", "", "",]);
        setPlayer("X")
    }

    return (
        <div>
            <h1>Tic-tac-toe Game</h1>
            
            <div className="board">
                <div className="row">
                    <Box Value={board[0]} chooseBox={()=>{chooseBox(0)}} />
                    <Box Value={board[1]} chooseBox={()=>{chooseBox(1)}} />
                    <Box Value={board[2]} chooseBox={()=>{chooseBox(2)}} />
                </div>
            
                <div className="row">
                    <Box Value={board[3]} chooseBox={()=>{chooseBox(3)}} />
                    <Box Value={board[4]} chooseBox={()=>{chooseBox(4)}} />
                    <Box Value={board[5]} chooseBox={()=>{chooseBox(5)}} />
                </div>
            
                <div className="row">
                    <Box Value={board[6]} chooseBox={()=>{chooseBox(6)}} />
                    <Box Value={board[7]} chooseBox={()=>{chooseBox(7)}} />
                    <Box Value={board[8]} chooseBox={()=>{chooseBox(8)}} />
                </div>
            
            </div>
        </div>
    )
}

export default Ticktacktoe