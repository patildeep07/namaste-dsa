// Star Patterns

// 1. n=4, stars in one line

console.log("\n1. Simple n rows and columns: \n");

let n1 = 4;

for (let i = 0; i < n1; i++) {
  let pattern = "";
  for (let j = 0; j < n1; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}

// 2. Right angle triangle pattern

console.log("\n2. Right angle triangle pattern: \n");

let n2 = 4;

for (let i = 0; i < n2; i++) {
  let pattern = "";
  for (let j = 0; j < i + 1; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}

// 3. Same as above but numbers

console.log("\n3. Right angle numbered triangle pattern: \n");

let n3 = 5;

for (let i = 0; i < n3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + `${j + 1}`;
  }
  console.log(row);
}

// 4. Flip the above triangle up and down

console.log("\n4. Inverse Right angle numbered triangle pattern: \n");

let n4 = 5;

for (let i = 0; i < n4; i++) {
  let row = "";
  for (let j = 0; j < n4 - i; j++) {
    row = row + `${j + 1}`;
  }
  console.log(row);
}

// 5. Mirror image of triangle

console.log("\n4. Right angled triangle but mirror image, so ulta");

let n5 = 5;

for (let i = 0; i < n5; i++) {
  row = "";
  for (let j = 0; j < n5; j++) {
    if (j < n5 - i - 1) {
      row = row + ".";
    } else {
      row = row + `${n5 - j}`;
    }
  }
  console.log(row);
}

// 6. Mirror image of triangle

console.log("\n4. Right angled triangle but mirror image, so ulta");

let n6 = 5;

for (let i = 0; i < n6; i++) {
  row = "";
  let count = 1;
  for (let j = 0; j < n6; j++) {
    if (j < n6 - i - 1) {
      row = row + ".";
    } else {
      row = row + count;
      count++;
    }
  }
  console.log(row);
}

// 7. 10101010 Triangle

console.log("\n7. 101010 Right angle triangle");

let n7 = 5;
for (let i = 0; i < n7; i++) {
  let row = "";
  let flag = 1;
  for (let j = 0; j <= i; j++) {
    row = row + flag;
    flag = flag ? 0 : 1;
  }
  console.log(row);
}

// 7. 10101010 Triangle

console.log(
  "\n8. Same as above Right angle triangle, but toggle doesnt refresh after every row"
);

let n8 = 5;
let toggle = 1;

for (let i = 0; i < n8; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    toggle = toggle ? 0 : 1;
  }

  console.log(row);
}
