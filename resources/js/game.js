/**
 * IIFE used to create the game
 */
const game = (function(gameBoard) {

    const WINNING_COMBINATIONS = [
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Third row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 4, 8], // Diagonal
        [2, 4, 6]  // Reverse diagonal
    ];

    let player1;
    let player2;
    let currentPlayer;

    const modal = document.querySelector('#select-players');
    const playerForm = document.querySelector('#select-player-form');

    init();

    function init() {
        // Add the event listeners to the cells in the DOM
        gameBoard.cellsDOM.forEach((cell, index) => {
            cell.addEventListener('click', () => playRound(index));
        });

        //Add the event listener to the start game button
        playerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const player1Name = document.querySelector('#player1Name').value;
            const player2Name = document.querySelector('#player2Name').value;
            player1 = createPlayer(1, player1Name, 'X');
            player2 = createPlayer(2, player2Name, 'O');
            currentPlayer = player1;
            modal.close();
        });

        //Show the select players modal
        modal.showModal();
    }

    function playRound(index) {
        const boardStatus = gameBoard.playRound(currentPlayer.mark, index);
        if (boardStatus !== -1) {
            const roundResult = checkWinner(boardStatus);
            switch (roundResult) {
                case player1.mark:
                    player1.addScore();
                    gameBoard.reset();
                    break;
                case player2.mark:
                    player2.addScore();
                    gameBoard.reset();
                    break;
                case "draw":
                    gameBoard.reset();
                    break;
                default:
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
                    break;
            }
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