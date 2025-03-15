/**
 * IIFE used to create the Game Board
 */
const gameBoard = (function() {

    // The game board
    let gameBoard = new Array(9).fill(null);

    const boardDOM = document.querySelector('#board');
    const cellsDOM = Array.from(boardDOM.children);

    /**
     * Function used to play a round
     * @param {*} mark The mark of a player
     * @param {*} index The position to put the mark
     * @returns The gameBoard status or -1 if the move is not allowed
     */
    function playRound(mark, index) {
        if (gameBoard[index] == null) {
            gameBoard[index] = mark;
        }
        render();
        return gameBoard;
    }

    /**
     * Resets the game board
     */
    function reset() {
        gameBoard = new Array(9).fill(null);
        render();
        return gameBoard;
    }

    /**
     * Renders the actual state of the board
     */
    function render() {
        gameBoard.forEach((value, index) => {
            value !== null ? cellsDOM[index].textContent = value : cellsDOM[index].textContent = '';
        });
    }

    return { playRound, reset,
        get cellsDOM() {
            return cellsDOM;
        }
     };
})();