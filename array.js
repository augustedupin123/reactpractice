var names = ["rajagopal", "satish"];
var arr = ["m", "m"];
var age = [28, 32];

var name_gender_age = ["rajagopal", "m", 28, "Nrupul", "m", 32];
var person1 = ["rajagopal", "m", 28];
var person2 = ["satish", "m", 32];

var persons = [];
persons.push(person1);
console.log(persons);
persons.push(person2);
console.log(persons);

for (var i = 0; i<persons.length; i++){
    console.log(persons[i]);
    for (var j=0; j<persons[i].length; j++){
        console.log(persons[i][j]);
    }
}

var sudoku = [[1.1,2.1,3.1,4.1,5.1,6.1,7.1,8.1,9.1],
[1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2],
[1.3,2.3,3.3,4.3,5.3,6.3,7.3,8.3,9.3],
[1.4,2.4,3.4,4.4,5.4,6.4,7.4,8.4,9.4],]

for (var i = 0; i<sudoku.length; i++){
    console.log(sudoku[i]);
        for (var l = 0; l<sudoku[i]; l++){
            console.log(sudoku[i][j]);
        }
    }



for (var i = 0; i<sudoku.length; i++){
    for (var j = 0; sudoku[i].length; j++){
        if (i + j == 8){
            console.log(sudoku[i][j]);
        }
    }
}
for (var k = 0; k <=8; k++){
    console.log(sudoku[k][8-k]);
}

var sum1 = 0;

var items = [
    [1,2,1],
    [2,1,2]
]

for (var i = 0; i < items.length; i++){
    for( var j=0; j < items.length; j++){
        sum1 = sum1 + items[i][j];
    }
}

console.log(sum1);

