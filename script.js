// Setting up the gameBoard module
const gameBoardModule = (function() {
    const gameBoard = ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
    return{gameBoard};
})();

// Setting up the displayController module
const displayControllerModule = (function() {
    let testF = () => { console.log('testing a private function call inside of a module object') }
    return {testF};
})();

// Setting up the player factory function
const createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => {
        playerName;
        console.log(`This is the name of player ${playerNumber}: ${playerName}`);
    }
    return {getPlayerName, playerName, playerNumber, assignedXO};
}

const renderGameBoardContent = (() => {
    const allBloc = document.querySelectorAll('.bloc');
    for(i = 0; i < gameBoardModule.gameBoard.length; i++) {
        allBloc[i].textContent = gameBoardModule.gameBoard[i];
        console.log('show array content', gameBoardModule.gameBoard[i]);
    }
    // return{};
})();


// make a function which takes two parameters, X and O, which on the first time use X and for the following time use O
// check if the spot is empty or not
// for the first click store X in library, renderGameBoardContent
//for the second click store O in library, renderGameBoardContent



let Roua = createPlayer('Roua', 1, 'X');
let Rambo = createPlayer('Rambo', 2, 'O');

// when restart the game, should set the array to [];