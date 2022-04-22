let firstName = '     vikas       ';
console.log(firstName.length);
// strings are immutable.
// Below code will give you a new string.
let newString = firstName.trim();
console.log(newString);
firstName = firstName.toUpperCase();
console.log(firstName);
