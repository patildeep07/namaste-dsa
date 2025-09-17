// Count number of digits in a number

let number = -4569281;

function countDigits(num1) {
  let count = 0;

  if (num1 == 0) {
    return 1;
  }

  if (num1 < 0) {
    num1 = num1 * -1;
  }

  while (num1 > 0) {
    count = count + 1;
    num1 = Math.floor(num1 / 10);
  }

  return count;
}

const result = countDigits(number);
console.log(`Number of digits in ${number} is/are: `, result);
