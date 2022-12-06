const fs = require("fs");

const input = fs.readFileSync("./input2.txt", { encoding: "utf-8" }).split("\n");

const t0_0 = performance.now();
//
// solution
//
const t1_0 = performance.now();
const firstAnswer = ''; 
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${firstAnswer}`);

const t0_1 = performance.now();
//
// solution
//
const t1_1 = performance.now();
const secondAnswer = ''; 
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${secondAnswer}`);