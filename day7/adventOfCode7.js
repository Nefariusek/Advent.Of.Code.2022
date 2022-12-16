const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n");

let currentPath = [];
const directoryPathToSize = new Map();
const t0_0 = performance.now();
//
input.forEach((line) => {
    const lineParts = line.split(" ");

    if (line.startsWith("$ cd")) {
        if (lineParts[2] === "..") {
            currentPath.pop();
        } else {
            currentPath.push(lineParts[2]);
            directoryPathToSize.set(currentPath.join('|'), 0);
        }
    }

    let affected = '';
    if (+lineParts[0]) {
            currentPath.forEach((dir) => {
                if (affected) {
                    affected += `|${dir}`
                } else {
                    affected = dir
                }
                const currentDirectorySize = directoryPathToSize.get(affected);
                directoryPathToSize.set(affected, currentDirectorySize + +lineParts[0]);
            });
    }
});

// console.log(Array.from(directoryToSize.values()).filter(size => size <= 100000))
const firstAnswer = Array.from(directoryPathToSize.values())
    .filter((size) => size <= 100000)
    .reduce((sum, size) => sum + size, 0);
//
const t1_0 = performance.now();
console.log(`First task took ${t1_0 - t0_0} milliseconds.`);
console.log(`Answer 1 ${firstAnswer}`);

const t0_1 = performance.now();
//
const totalDiskSpace = 70000000;
const requiredDiskSpace = 30000000;
const occupiedDiskSpace = directoryPathToSize.get('/');
const freeDiskSpace = totalDiskSpace - occupiedDiskSpace;
const spaceToFreeUp = requiredDiskSpace - freeDiskSpace
const secondAnswer = Math.min(...Array.from(directoryPathToSize.values()).filter(size => size > spaceToFreeUp))
//
const t1_1 = performance.now();
console.log(`Second task took ${t1_1 - t0_1} milliseconds.`);
console.log(`Answer 2 ${secondAnswer}`);
