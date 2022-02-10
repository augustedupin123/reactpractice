var string1 = "There is a smallest natural number";
var string2 = "Java";
var count1 = 0;
var count2 = 0;


for (var i=0; i<string1.length; i++){
    if(string1[i] == ' '){
        count1++;
    }
}
for (var w=0; w<string2.length; w++){
    if(string2[i] == ' '){
        count2++;
    }
}

console.log("The count of words in string1 is:");
console.log(count1 + 1);
console.log("The count of words in string2 is");
console.log(count2);

