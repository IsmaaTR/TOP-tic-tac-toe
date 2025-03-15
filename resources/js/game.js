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

    const player1 = createPlayer(1, 'Player 1', 'X');
    const player2 = createPlayer(2, 'Player 2', 'O');

    let currentPlayer = player1;

    init()

    function init() {
        //Add the event listeners to the cells in the DOM
        gameBoard.cellsDOM.forEach((cell, index) => {
            cell.addEventListener('click', () => playRound(index));
        })
    }

    function playRound(index) {
        const boardStatus = gameBoard.playRound(currentPlayer.mark, index);
        const roundResult = checkWinner(boardStatus);
        switch (roundResult) {
            case player1.mark:
                currentPlayer = player1;
                player1.addScore();
                gameBoard.reset();
                break;
            case player2.mark:
                currentPlayer = player1;
                player2.addScore();
                gameBoard.reset();
                break;
            case "draw":
                currentPlayer = player1;
                gameBoard.reset();
                break;
            default:
                currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
                break;
        }
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