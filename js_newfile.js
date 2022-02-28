var numbers = 987;
var factors = [];
var count = 0;


for (var i = 1; i <=numbers; i++){
    if(numbers%i == 0){
        count++;
        factors.push(i);
    }
}

if(count==2){
    console.log("prime number");
} else {
    console.log("Not a prime");
}
console.log(factors);


var line = "the quick brown fox a";
var count = 0;
var space = 0;

for(var k=0; k<line.length; k++){
    console.log(line[k]);
    if(line[k]==" "){
        space++;
    }
}
console.log(space);

var game2 = [18,19,20,21,22,-6,90,-80];
var max1 = 0;
var min1 = 0;
for (var k = 0; k<game2.length; k++){
    if(max1<game2[k]){
        max1 = game2[k];
    }
}
console.log(max1);

for(var l = 0; l<game2.length; l++){
    if(min1>game2[l]){
        min1 = game2[l];
    }
}
console.log(min1);

var w = 100;
var a1 = [];
for(var b = 0; b<100; b++){
    if(b%3==0){
        a1.push(b);
    }
}
console.log(a1);
sum1 = 0;

for (var j = 0; j<a1.length; j++){
    sum1 = sum1 + a1[j];
}
console.log(sum1);
console.log(sum1/a1.length);

var x1 = 0;
var x2 = 100;

var sum_even = 0;
var sum_odd = 0;

for(var y=x1; y<x2; y++){
    if(y%2==0){
        sum_even = sum_even + y;
    } else if (y%2!=0){
        sum_odd = sum_odd + y;
    }

}
console.log(sum_even);
console.log(sum_odd);

var arr_gamescore = [10,3,-5];
var lowest_Score = 0;

for(var k = 0; k<arr_gamescore.length; k++){
    if(lowest_Score>arr_gamescore[k]){
        lowest_Score = arr_gamescore[k];
    }
}

console.log(lowest_Score);

var str1 = ['a', 'e', 'k', 't', 'y'];
var count2 = 0;
for (var w=0; w<str1.length; w++){
    if(str1[w]!='a' && str1[w]!='e' && str1[w]!='i' && str1[w]!='o' && str1[w]!='u'){
        count2++;
    }
}
console.log(count2);




