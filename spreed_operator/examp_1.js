const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];

const numCombined = [...num1, ...num2];

//iterate through thr new array
console.log(numCombined);
for (num of numCombined) {
    console.log(num);
}

/*
\spreed_operator>node examp_1.js
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
1
2
3
4
5
6
7
8

*/