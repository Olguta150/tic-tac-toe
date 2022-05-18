// Setting up the gameBoard module
const gameBoardModule = (function() {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    return {gameBoard};
})();

// Setting up the player factory function
const createPlayer = (playerName) => {
    let currentPlayer = 'O';
    myGameNames = [];

    function addNamesToGame() {
        const playerOneName = document.getElementById('add-player1-name');
        const playerTwoName = document.getElementById('add-player2-name');
        let playerOne = playerOneName.value;
        let playerTwo = playerTwoName.value;
        myGameNames.push(playerOne);
        myGameNames.push(playerTwo);
    }

    function displayName() {
        const getPlayer1 = document.querySelector('.get-player1');
        const getPlayer2 = document.querySelector('.get-player2');
        getPlayer1.innerHTML = myGameNames[0];
        getPlayer2.innerHTML = myGameNames[1];
    }

    function displaySecondLayout() {
        const layoutTwo = document.querySelector('.layout-2');
        const layoutOne = document.querySelector('.layout-1');
        const title = document.querySelector('h1');

        layoutTwo.style.display = 'flex';
        layoutOne.style.display = 'none';
        title.style.display = 'none';
    }

    document.querySelector('.start-button').addEventListener('click', (e) => {
        addNamesToGame();
        displayName();
        displaySecondLayout();
    })

    function cellHandlerClick(cellClickTarget) {
        const cellClick = cellClickTarget.target;
        
        const cellClickIndex = parseInt(cellClick.getAttribute('data-cell-index'));
        
        if(gameBoardModule.gameBoard[cellClickIndex] !== '') {
            return;
        }

            cellClickAssign(cellClick, cellClickIndex);
            handleResultVariation();
    }

    function cellClickAssign(cellClick, cellClickIndex) {
        gameBoardModule.gameBoard[cellClickIndex] = currentPlayer;
        cellClick.innerHTML = currentPlayer;
    }

    const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    function handleResultVariation() {
        const scoreFirstPlayer = document.querySelector('.score-player1');
        const scoreSecondPlayer = document.querySelector('.score-player2');
        scoreFirstPlayer.textContent = 0;
        scoreSecondPlayer.textContent = 0;
        let roundWon = false;
        for(i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameBoardModule.gameBoard[winCondition[0]];
            let b = gameBoardModule.gameBoard[winCondition[1]];
            let c = gameBoardModule.gameBoard[winCondition[2]];
            if(a === '' || b === '' || c === '') {
                continue;
            }
            if(a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if(roundWon) {
            if(currentPlayer === 'X') {
                scoreFirstPlayer.textContent = 'won';
            } else {
                scoreSecondPlayer.textContent = 'won';
            }
        }

        let roundDraw = !gameBoardModule.gameBoard.includes('');
        if(roundDraw) {
            document.querySelector('.get-name-container').style.display = 'none';
            document.querySelector('.it-is-a-draw').style.display = 'block';
        }

        handlePlayerChange();
    }

    handleResultVariation();

    function handlePlayerChange() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    document.querySelectorAll('.bloc').forEach(cell => cell.addEventListener('click', cellHandlerClick));

    document.querySelector('.restart-button').addEventListener('click', () => {
        location.reload();
    })

    return { playerName };
}


let Roua = createPlayer('Roua');