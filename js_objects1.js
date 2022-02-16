function test(s){
    if(s == 'a'){
        return 'A';
    }
}

var testf = test('c');
console.log(testf);
var details = {
    name: "Mark",
    age: 30,
    gender: "M",
    email: "markwahlberg@gmail.com"

}

console.log(details.email);
console.log(details['name']);
var key = 'gender';
console.log(details.key);
console.log(details[key]);
details.hobbies = ['Trading', 'investing'];
details.email = "markgood@gmail.com";
console.log(details);

delete details.hobbies;

console.log(details);

var careers = {
    type: "fullstack",
    tenure: "6 months",
    hello : function(message) {
        console.log("Hello" + message + this.tenure);
    }
}

careers.hello("Morning");





for(key in details){
    console.log(key + "-" + details[key]);
}







