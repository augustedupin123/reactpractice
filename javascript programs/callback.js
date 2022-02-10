function test() {
    console.log("name");
}

var foo = function(name) {
    console.log("Foo" + name);
}

function doSomething(name, a, b) {
    var n = "School";
    console.log(name);
    a();
    b(n);
}

doSomething("Saudi",test, foo);

