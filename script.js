// Setting up the gameBoard module
const gameBoardModule = (function() {
    const gameboard = [];
    return{};
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

let Roua = createPlayer('Roua', 1, 'X');
let Rambo = createPlayer('Rambo', 2, 'O');