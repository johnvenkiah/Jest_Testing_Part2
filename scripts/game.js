// let game = {
//     currentGame: [],
//     score: 0,
//     playerMoves: [],
//     choices: ["button1", "button2", "button3", "button4"],
//     turnNumber: 0,
// }

// const newGame = () => {
//     game.score = 0;
//     game.currentGame = [];
//     game.playerMoves = [];
//     showScore();
//     addTurn();
// };

// const addTurn = () => {
//     game.playerMoves = [];
//     game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
//     showTurns();
// }

// const lightsOn = ((circ) => {
//     document.getElementById(circ).classList.add(circ + "light");
//     setTimeout(() => {
//         document.getElementById(circ).classList.remove(circ + "light");
//     }, 400);
// })

// const showScore = () => document.getElementById("score").innerText = game.score;

// const showTurns = () => {
//     game.turnNumber = 0;
//     let turns = setInterval(() => {
//         lightsOn(game.currentGame[game.turnNumber]);
//         game.turnNumber++;
//         if (game.turnNumber >= game.currentGame.length) {
//             clearInterval(turns);
//         }
//     }, 800);
// }

// module.exports = {game, newGame, showScore, addTurn, lightsOn, showTurns}; // {} -> exporting more than one object/function from the file

let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
    turnInProgress: "false",
    lastButton: "",
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    console.log(circ);
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(function () {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong Move!");
        newGame();
    }
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn};
