const arr = new Array(23,123,21,'orange');
console.log(arr);
arr[0] = 'harry';
console.log(arr);
console.log(arr.reverse());
let value = arr.indexOf(23);
console.log(value);
console.log(arr.indexOf(123));
console.log(arr.splice(1,4));
let myObj = {
    'firstname' : 'harry',
    channel: 'codewithharry',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myObj);
console.log(myObj.isActive);
console.log(myObj['isActive']);
let marks = [1,2,3,7];
let marks3 = [1,4,5,9];
var marks4;
marks4 = marks3.concat(marks);
console.log(marks4);

let arr = [2,5,6,4,2,3];
arr.forEach(function(element) {
        console.log(element);
});

