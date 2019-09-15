/* CHALLANGE @2*/
let inputArray = process.argv;
let result = 0;
//console.log(Number(inputArray[2]));let temp = 0;
function add() {
  for (let i = 2; i < inputArray.length; i++) {
    result = result + Number(inputArray[i]); // 0+1
  }
  console.log(result);
  return result;
}

//add();

/* CHALLANGE @2*/

/* CHALLANGE @3*/
const fs = require("fs");

const path = process.argv[2];
let buffer = fs.readFileSync(path);
let str = buffer.toString().split("\n");

console.log(str.length - 1);

function countSpaces() {}
/* CHALLANGE @3*/