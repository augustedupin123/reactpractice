var name = "prithvi";
function addnumbers(a,b){
    var age = 32;
    console.log(name);
}

function test(){
    console.log(name);
    name = "Nick";
}

console.log(name);
addnumbers();
test();
console.log(name);

function divisible_by_three(number) {
    if (number % 3 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(divisible_by_three(3));
console.log(divisible_by_three(7));

var limit = 1000;
for(var i = 1; i <=limit; i++){
    var outcome = divisible_by_three(i);
    if (outcome) {
        console.log(i);
    }
}

function touppercase(char){
    var lower = 'abcde';
    var upper = 'ABCDE';
    for (var i = 0; i < lower.length; i++){
        if (lower[i] == char){
            return upper[i];
        }
    }
}
return char;




