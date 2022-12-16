const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n");
let firstAnswer = 0; 
const t0_0 = performance.now();
//
input.forEach(pair => {
    const [firstElf, secondElf] = pair.split(',');
    const [firstElfStart, firstElfEnd] = firstElf.split('-');
    const [secondElfStart, secondElfEnd] = secondElf.split('-');
    if ((+firstElfEnd >= +secondElfStart && +firstElfStart >= +secondElfStart && +firstElfEnd <= +secondElfEnd) || (+secondElfStart >= +firstElfStart && +secondElfEnd <= +firstElfEnd)) {
        firstAnswer++;
    }
})
//
const t1_0 = performance.now();
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${firstAnswer}`);

let secondAnswer = 0; 
const t0_1 = performance.now();
//
input.forEach(pair => {
    const [firstElf, secondElf] = pair.split(',');
    const [firstElfStart, firstElfEnd] = firstElf.split('-');
    const [secondElfStart, secondElfEnd] = secondElf.split('-');
    const firstRange = +firstElfEnd - +firstElfStart;
    const secondRange = +secondElfEnd - +secondElfStart;
    if (Math.max(+firstElfStart, +secondElfStart) <= Math.min(+firstElfEnd, +secondElfEnd) ) {
        secondAnswer++;
    }
})
//
const t1_1 = performance.now();
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${secondAnswer}`);