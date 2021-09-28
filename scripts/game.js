let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
};

// const addTurn = () => {
//     game.playerMoves = [];
//     game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
//     //showTurns();
// }

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);
}

const showScore = () => document.getElementById("score").innerText = game.score;

module.exports = {game, newGame, showScore, addTurn, lightsOn}; // {} -> exporting more than one object/function from the file
