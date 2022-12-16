const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n\n");
const storage = input[0].split("\n");
const moves = input[1].split("\n").map((moveString) => {
    const moveStringParts = moveString.split(" ");
    return { amount: +moveStringParts[1], from: +moveStringParts[3] - 1, to: +moveStringParts[5] - 1 };
});
const t0_0 = performance.now();
//

const stacksFirst = [];

storage.forEach((level, idx) => {
    if (idx < storage.length - 1) {
        for (let i = 0; i <= level.length / 4; i++) {
            if (level[1 + i * 4]?.trim()) {
                if (stacksFirst[i]) {
                    stacksFirst[i].unshift(level[1 + i * 4].trim());
                } else {
                    stacksFirst[i] = [level[1 + i * 4].trim()];
                }
            }
        }
    } 
});
moves.forEach((move, idx) => {
    const movedItems = stacksFirst[move.from]
        .splice(stacksFirst[move.from].length - move.amount, move.amount)
        .reverse();
    stacksFirst[move.to].push(...movedItems);
});
//
const t1_0 = performance.now();
const firstAnswer = stacksFirst.reduce((sum, stack) => sum + stack[stack.length - 1], "");
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${firstAnswer}`);

const t0_1 = performance.now();
//
const stacks = [];

storage.forEach((level, idx) => {
    if (idx < storage.length - 1) {
        for (let i = 0; i <= level.length / 4; i++) {
            if (level[1 + i * 4]?.trim()) {
                if (stacks[i]) {
                    stacks[i].unshift(level[1 + i * 4].trim());
                } else {
                    stacks[i] = [level[1 + i * 4].trim()];
                }
            }
        }
    }
});
moves.forEach((move, idx) => {
    const movedItems = stacks[move.from].splice(stacks[move.from].length - move.amount, move.amount);
    stacks[move.to].push(...movedItems);
});
//
const t1_1 = performance.now();
const secondAnswer = stacks.reduce((sum, stack) => sum + stack[stack.length - 1], "");
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${secondAnswer}`);
