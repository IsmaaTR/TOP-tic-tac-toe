/**
 * IIFE used to create the Game Board
 */
const gameBoard = (function() {

    // The game board
    let gameBoard = new Array(9).fill(null);

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
        return gameBoard;
    }

    /**
     * Resets the game board
     */
    function reset() {
        gameBoard = new Array(9).fill(null);
        return gameBoard;
    }

    return { playRound, reset };
})();