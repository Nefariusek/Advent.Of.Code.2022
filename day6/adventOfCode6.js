const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
let firstAnswer = 0; 
const t0_0 = performance.now();
//
for (let i = 0; i < input.length; i++) {
    const possibleMarker = input.substring(i, i+4).split('');
    if (possibleMarker.some(letterToCheck => possibleMarker.filter(letter => letter === letterToCheck).length > 1)) {
        continue;
    } else {
        if (!firstAnswer) {
            firstAnswer = i + 4;
        }
    }
}
const t1_0 = performance.now();

console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${firstAnswer}`);

let secondAnswer = 0; 
const t0_1 = performance.now();
//
for (let i = 0; i < input.length; i++) {
    const possibleMarker = input.substring(i, i+14).split('');
    if (possibleMarker.some(letterToCheck => possibleMarker.filter(letter => letter === letterToCheck).length > 1)) {
        continue;
    } else {
        if (!secondAnswer) {
            secondAnswer = i + 14;
        }
    }
}
//
const t1_1 = performance.now();

console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${secondAnswer}`);