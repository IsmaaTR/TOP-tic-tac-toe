/**
 * IIFE used to create the game
 */
const game = (function(gameBoard) {

    const WINNING_COMBINATIONS = [
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Thrid row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 4, 8], // Diagonal
        [2, 4, 6]  // Reverse diagonal
    ];

    function playRound(player, index) {
        const boardStatus = gameBoard.playRound(player.mark, index);
        const roundResult = checkWinner(boardStatus);
        return { boardStatus, roundResult };
    }

    function checkWinner(board) {
        for (let combination of WINNING_COMBINATIONS) {
            const [a, b, c] = combination;
            
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Returns the winner
            }
        }
        
        if (!board.includes(null)) {
            return "draw"; // No empty spaces available
        }
        
        return null; 
    }

    return { playRound };

})(gameBoard);