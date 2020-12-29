import React from 'react';
import Square from './Square';

function Board() {
    return (
        <div>
            <div className="border-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="border-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="border-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    )
}

export default Board;
