const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n");

function getPriorityValue(commonItem) {
    if (commonItem) {
        if (commonItem === commonItem.toUpperCase()) {
            return commonItem.codePointAt(0) - 38;
        } else {
            return commonItem.codePointAt(0) - 96;
        }
    }
}

const t0_0 = performance.now();
let firstAnswer = 0;

input.forEach((rucksack) => {
    const compartmentSize = rucksack.length / 2;
    const firstCompartment = rucksack.substring(0, compartmentSize);
    const secondCompartment = rucksack.substring(compartmentSize);

    const commonItem = firstCompartment.split("").find((item) => secondCompartment.includes(item));

    firstAnswer += getPriorityValue(commonItem) || 0;
});

let secondAnswer = 0;

const t1_0 = performance.now();
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${firstAnswer}`);

const t0_1 = performance.now();
const numberOfGroups = input.length / 3;
for (let i = 0; i < numberOfGroups.toFixed(0); i++) {
    const commonItem = input[i * 3]
        .split("")
        .find((item) => input[i * 3 + 1].includes(item) && input[i * 3 + 2].includes(item));

    secondAnswer += getPriorityValue(commonItem) || 0;
}
const t1_1 = performance.now();
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${secondAnswer}`);
