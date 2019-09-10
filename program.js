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
let counter = 0;

let isRead = fs.readFileSync("./README.md");

let str = isRead.toString().split(",");

console.log(str[0]);

function countSpaces() {}
/* CHALLANGE @3*/
