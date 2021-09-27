/**
 * @jest-environment jsdom
 */

// const M = require("minimatch");
const {game} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });

    test("current game key exists", () => {
        expect("currentGame" in game).toBe(true);
    });

    test("player moves exists", () => {
        expect("playerMoves" in game).toBe(true);
    });

    test("choices exists", () => {
        expect("choices" in game).toBe(true);
    });
});