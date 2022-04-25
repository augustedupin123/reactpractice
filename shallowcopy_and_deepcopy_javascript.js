let obj1 = {
    fname: "abc1",
    lname: "abc2",
    email: "abc3",
    address: "bangalore"
}
let obj2 = obj1;
obj2.email = "abc@xyz.com";
console.log(obj2);
console.log(obj1);
// When a reference variable is copied into a new reference variable using the assignment operator, 
// a shallow copy of the referenced object is created. In simple words, a reference variable 
// mainly stores the address of the object it refers to. When a new reference 
// variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. 
// This means both the old and new reference variable point to the same object in memory. 

var employee = {
    eid: "28",
    email: "bhardwajrahul100@gmail.com",
    eaddress: "Bangalore",
    salary: "$60,000"
}
var employee1 = JSON.parse(JSON.stringify(employee));
employee.email = "abdc@datascience.com"
console.log(employee);
console.log(employee1);
// Here the new object is created using 
// the JSON.parse() and JSON.stringify() methods of JavaScript. JSON.stringify() takes a JavaScript object as argument and then 
// transforms it into a JSON string. This JSON string is passed to the JSON.parse() method which then 
// transforms it into a JavaScript object. 
// This method is useful when the object is small and has serializable properties.

