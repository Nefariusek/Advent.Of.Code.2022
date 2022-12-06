const fs = require("fs");

const input = fs.readFileSync("./input1.txt", { encoding: "utf-8" }).split("\n\n");

const t0_0 = performance.now();

const elvenFood = input.map((elf) => elf.split("\n").reduce((acc, food) => +food + acc, 0));
const sortedCalories = elvenFood.sort((a, b) => b - a);

const t1_0 = performance.now();
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${sortedCalories[0]}`);

const t0_1 = performance.now();

const sumOfTopThree = sortedCalories.splice(0, 3).reduce((sum, currentCalories) => sum + currentCalories, 0);

const t1_1 = performance.now();
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${sumOfTopThree}`);
