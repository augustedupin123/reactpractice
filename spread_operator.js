let array1 = ["item1", "item2"];
let array2 = [...array1];
console.log(array2);
// line no. 2 is spread operator. where entire array1 is cloned to array2.
// another way to clone an array:
array3 = array1.slice(array1);
console.log(array1);

array4 = ["item4", "item5", "item6"];
array5 = array4.slice(0).concat(array4);
console.log(array5);
// the shallow operator creates deep copies of the array.
