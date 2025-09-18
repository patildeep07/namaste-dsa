// Palindrome of a number

function isPalindrome(num) {
  if (isNaN(num)) {
    return false;
  }

  if (num < 0) {
    return false;
  }

  let rev = 0;
  let n = num;

  while (n > 0) {
    rev = 10 * rev + (n % 10);
    n = Math.floor(n / 10);
  }

  return rev == num;
}

const num1 = 32323;
const result1 = isPalindrome(num1);
console.log(`${num1} is `, result1 ? "Palindrome" : "not a Palindrome");

const num2 = 123;
const result2 = isPalindrome(num2);
console.log(`${num2} is `, result2 ? "Palindrome" : "not a Palindrome");

const num3 = "word";
const result3 = isPalindrome(num3);
console.log(`${num3} is `, result3 ? "Palindrome" : "not a Palindrome");

const num4 = 404;
const result4 = isPalindrome(num4);
console.log(`${num4} is `, result4 ? "Palindrome" : "not a Palindrome");
