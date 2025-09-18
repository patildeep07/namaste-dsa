// Reverse Integer

function reverseInteger(num) {
  if (isNaN(num)) {
    return "NaN";
  }

  let rev = 0;
  let value = num > 0 ? num : num * -1;

  while (value > 0) {
    let rem = value % 10;
    rev = rev * 10 + rem;
    value = Math.floor(value / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return num > 0 ? rev : rev * -1;
}

// Case 1: Positive numbers
const num1 = 451;
const result1 = reverseInteger(num1);
console.log(`Number is ${num1}, reverse is ${result1}`);

// Case 2: Negative numbers
const num2 = -5451;
const result2 = reverseInteger(num2);
console.log(`Number is ${num2}, reverse is ${result2}`);
