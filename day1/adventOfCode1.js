const fs = require("fs");

const input = fs.readFileSync("./input1.txt", {encoding: "utf-8"}).split('\n\n')

const elvenFood = input.map(elf => elf.split('\n').reduce((acc, food) => +food + acc, 0));
const sortedCalories = elvenFood.sort((a, b) => b - a);

console.log(`Answer 1 ${sortedCalories[0]}`);

const sumOfTopThree = sortedCalories[0] + sortedCalories[1] + sortedCalories[2];

console.log(`Answer 2 ${sumOfTopThree}`);
