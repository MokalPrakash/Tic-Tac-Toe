import { createContext, useEffect, useState } from "react";

export const GameContext = createContext()

export const GameContextProvider = ({ children }) => {
    const initialPlays = [...new Array(9).map(()=> "")]
    const initialPoints = {"X": 0,"O":0,"ties":0}

    const [plays,setPlays] = useState(initialPlays)
    const [points,setPoints] = useState(initialPoints)
    const [firstPlayer,setFirstPlayer] = useState("X")
    const [playMode,setPlayMode] = useState("")  // player || cpu
    const [currentPlayer,setCurrentPlayer] = useState("X")
    const [winningIndexes,setWinningIndexes] = useState([])

    const [gameFinished,setGameFinished] = useState(false)
    const [winner,setWinner] = useState(null)

    const handlePlay = (position) => {
        if (plays[position]) {
            console.log("hi")
            return
        }
        // console.log("hi again")
        setPlays(plays => plays.map((play,i) => i === position ? currentPlayer : play))
        setCurrentPlayer(currentPlayer => currentPlayer === "X" ? "O" : "X")
    }

    const tie = () => {
        setPoints({...points,ties: points.ties + 1})
    }

    const resetGame = ()=> {
        resetRound()
        setPoints(initialPoints)
    }

    const resetRound = () => {
        setPlays(initialPlays)
        setCurrentPlayer("X")
        setGameFinished(false)
        setWinner(null)
        setWinningIndexes([])
    }

    const increamentPoints = (play) => {
        setPoints({...points,[play]: points[play] + 1})
    }

    const verifyWinner = () => {
        const winningPosition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6],
        ]

        for (const position of winningPosition) {
            const [a,b,c] = position
            // console.log({position})
            // console.log(plays[a])
            // console.log(plays[b])
            // console.log(plays[c])
            if (plays[a] === plays[b] && plays[b] === plays[c] && plays[a] !== ""){
                setWinningIndexes(position)
                return plays[a]
            }
        }
    }

    useEffect(() => {
        const gameOver = plays.filter(Boolean).length === 9
        const winner = verifyWinner()
        // console.log(winner)
        const againstCpu = playMode === "CPU"
        const isCpuTurn = currentPlayer !== firstPlayer
        const cpuPlay = againstCpu && isCpuTurn

        const getRandomIndex = () => Math.floor(Math.random() * 9)

        if (winner) {
            increamentPoints(winner)
            setWinner(winner)
        }else if(gameOver) {
            console.log("gameover")
            tie()
        }

        if (gameOver || winner) {
            setGameFinished(true)
            return
        }

        if (cpuPlay) {
            let randomIndex = getRandomIndex()

            while (plays[randomIndex] && !gameOver) {
                randomIndex = getRandomIndex()
            }

            handlePlay(randomIndex)
        }
    },[currentPlayer,playMode,firstPlayer,plays])
    return (
        <GameContext.Provider 
            value={{
                plays,points,currentPlayer,winningIndexes,
                setFirstPlayer,setPlayMode,
                winner,gameFinished,playMode,
                handlePlay,resetGame,resetRound
            }}
        >
            {children}
        </GameContext.Provider>
    )
}