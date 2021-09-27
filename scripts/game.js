let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

const showScore = () => document.getElementById("score").innerText = game.score;

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
};

module.exports = {game, newGame, showScore}; // {} -> exporting more than one object/function from the file
