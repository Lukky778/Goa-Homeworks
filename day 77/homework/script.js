const arr1 = ["a", "b", "c", "d", "e"];


const spliced1 = arr1.splice(1, 3); 

const sliced1 = spliced1.slice(1, 3);

let modified1 = sliced1.slice(); 
modified1.splice(1, 0, "x", "y"); 

console.log("დავალება 1:", modified1); // ✅ 

const arr2 = [1, 2, 3, 4, 5, 6];


arr2.splice(2, 2, "a", "b", "c"); 


const sliced2 = arr2.slice(-2);

console.log("დავალება 2:", arr2, sliced2);

const arr3 = ['a', 'b', 'c', 'd', 'e'];


const spliced3 = arr3.splice(1, 2); 

const sliced3 = spliced3.slice(1, 2);


let modified3 = sliced3.slice();
modified3.splice(1, 0, "x", "y"); 

console.log("დავალება 3:", modified3);

let arr4 = [10, 20, 30, 40, 50, 60];


arr4.splice(1, 2, 25, 27); 


const sliced4 = arr4.slice(3); 

console.log("დავალება 4:", arr4, sliced4);

const arr5 = ["sun", "moon", "star", "sky", "cloud", "rain", "wind"];


const spliced5 = arr5.splice(2, 3); 


let sliced5 = spliced5.slice(0, 2); 


sliced5.splice(2, 0, "hello"); 

console.log("დავალება 5:", sliced5);
