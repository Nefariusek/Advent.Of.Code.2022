const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n");

const ENEMY_ROCK = "A";
const ENEMY_PAPER = "B";
const ENEMY_SCiSSORS = "C";

const PLAYER_ROCK = "X";
const PLAYER_PAPER = "Y";
const PLAYER_SCiSSORS = "Z";

const RESULT_LOSE = "X";
const RESULT_DRAW = "Y";
const RESULT_WIN = "Z";
const ENEMY_TO_PLAYER_MOVES = new Map([
    [ENEMY_ROCK, { beats: PLAYER_SCiSSORS, draws: PLAYER_ROCK, lose: PLAYER_PAPER }],
    [ENEMY_PAPER, { beats: PLAYER_ROCK, draws: PLAYER_PAPER, lose: PLAYER_SCiSSORS }],
    [ENEMY_SCiSSORS, { beats: PLAYER_PAPER, draws: PLAYER_SCiSSORS, lose: PLAYER_ROCK }],
]);

const MOVE_TO_SCORE = new Map([
    [PLAYER_ROCK, 1],
    [PLAYER_PAPER, 2],
    [PLAYER_SCiSSORS, 3],
]);

const t0_0 = performance.now();

let firstPhasePoints = 0;

input.forEach((round) => {
    const [enemyMove, playerMove] = round.split(" ");
    const currentMoveInfo = ENEMY_TO_PLAYER_MOVES.get(enemyMove);
    if (currentMoveInfo) {
        if (playerMove === currentMoveInfo.beats) {
            firstPhasePoints += 0;
        } else if (playerMove === currentMoveInfo.draws) {
            firstPhasePoints += 3;
        } else {
            firstPhasePoints += 6;
        }
        firstPhasePoints += MOVE_TO_SCORE.get(playerMove);
    }
});

const t1_0 = performance.now();
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);

const t0_1 = performance.now();
let secondPhasePoints = 0;

input.forEach((round) => {
    const [enemyMove, result] = round.split(" ");
    const currentMoveInfo = ENEMY_TO_PLAYER_MOVES.get(enemyMove);
    if (currentMoveInfo) {
        if (result === RESULT_LOSE) {
            secondPhasePoints += MOVE_TO_SCORE.get(currentMoveInfo.beats);
        } else if (result === RESULT_DRAW) {
            secondPhasePoints += MOVE_TO_SCORE.get(currentMoveInfo.draws);
            secondPhasePoints += 3;
        } else {
            secondPhasePoints += MOVE_TO_SCORE.get(currentMoveInfo.lose);
            secondPhasePoints += 6;
        }
    }
});

const t1_1 = performance.now();
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(secondPhasePoints);

