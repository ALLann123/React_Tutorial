const numbers = [1, 2, 3, 4];

//double. Map allows us to manipulate each array element
const doubled = numbers.map(x => x * 2);

console.log(doubled);

//iterate through our array
for (let x of doubled) {
    console.log(x);
}

/*
 React_Tutorial\map>node double.js
[ 2, 4, 6, 8 ]
2
4
6
8

 */