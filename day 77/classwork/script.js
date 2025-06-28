const arr = ["a", "b", "c", "d", "e"];

const spliced = arr.splice(1, 3); 
// ამოაჭრის "b", "c", "d" => ახლა arr = ["a", "e"]
// ხოლო spliced = ["b", "c", "d"]

const sliced = spliced.slice(1, 3);  
// sliced = ["c", "d"]

let modifiedSliced = sliced.slice(); // ვქმნით ასლს
modifiedSliced.splice(1, 0, "x", "y");  
// index 1-ზე ვამატებთ "x" და "y"
