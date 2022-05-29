// --------------normal function---------------------
// let subtractTwoNumbers = function (num1, num2) {
//   return num1 - num2;
// };

// ---------------------arrow function-----------------
let subtractTwoNumbers = (num1, num2) => {
  return num1 - num2;
};

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

console.log("add of two numbers:", addTwoNumber(2, 6)); // returns sum of two numbers: (8)
console.log("subtract of two numbes:", subtractTwoNumbers(5, 2)); // 5-2 is 3;
