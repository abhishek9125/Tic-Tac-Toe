import React from 'react';
import Board from './Board';

class Game extends React.Component{

    constructor(){
        super()
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                {squares : Array(9).fill(null)}
            ]
        }
    }

    handleClick = (i) => {
        const history = this.state.history; // History Array
        const current = history[history.length - 1];    // Last object of History Array
        const squares = current.squares // Contains final values for 9 cells for current state.

        const winner = this.calculateWinner(squares);

        if(winner || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat({
                squares : squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })

    }

    calculateWinner = (squares) => {
        const possibilities = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i = 0; i < possibilities.length; i++) {
            const [a, b, c] = possibilities[i];
            if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
              return squares[a];
            }
        }
        return null;
    }

    render(){

        const history = this.state.history;
        const current = history[this.state.stepNumber];

        let status;
        const winner = this.calculateWinner(current.squares);

        if(winner){
            status = 'Winner is ' + winner;
        }else{
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board clickAction = {(i) => this.handleClick(i)} squares = {current.squares} />
                </div>

                <div className="game-info">
                    <div>
                        {status}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
