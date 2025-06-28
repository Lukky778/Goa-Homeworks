const names = ["nika", "luka", "mari"];
const [name1, name2, name3] = names;

console.log(name1); // nika
console.log(name2); // luka
console.log(name3); // mari


const points = [10, 30, 5, 2, 99];

// დამატება ბოლოს
points.push(100);      // [10, 30, 5, 2, 99, 100]

// წაშლა ბოლო ელემენტის
points.pop();          // [10, 30, 5, 2, 99]

// წაშლა პირველი ელემენტის
points.shift();        // [30, 5, 2, 99]

// დამატება დასაწყისში
points.unshift(50);    // [50, 30, 5, 2, 99]

// სტრინგად ქცევა
console.log(points.join(", "));    // "50, 30, 5, 2, 99"
console.log(points.toString());    // "50,30,5,2,99"

// სხვა მასივთან შეერთება
const morePoints = [200, 300];
const allPoints = points.concat(morePoints);  // [50, 30, 5, 2, 99, 200, 300]

console.log(allPoints);

const fruits = ["apple", "banana", "mango"];
const lastFruit = fruits[fruits.length - 1];

console.log(lastFruit); // mango

const a = [9, 3, 1];
const b = [4, 6, 5];

const combined = a.concat(b);               // [9, 3, 1, 4, 6, 5]
const sorted = combined.sort((x, y) => x - y); // [1, 3, 4, 5, 6, 9]

console.log(sorted);

const letters = ["H", "e", "l", "l", "o"];
const word = letters.join("");

console.log(word); // Hello
