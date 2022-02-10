var items = [
    [1,2,3],
    [4,5,6]
]

var rows = items.length;
var cols = items[0].length;
for (var i = 0; i<cols; i++) {
    var col_sum = 0;
    for (j = 0; j < rows; j++) {
        col_sum = col_sum + items[j][i];
    }
    console.log(col_sum);
}

var sum1 = 0;
for (var i = 0; i < rows; i++) {
    sum1 = sum1 + items[i][0];
}
console.log(sum1);

var sum2 = 0;
for (var i = 0; i < rows; i++) {
    sum2 = sum2 + items[i][1];
}
console.log(sum2);

var sum3 = 0;
for (var i = 0; i < rows; i++) {
    sum3 = sum3 + items[i][1];
}
console.log(sum3);

for (var c = 0; c < cols; c++) {
    var sum = 0;
    for (var r = 0; r < rows; r++){
        sum = sum + items[r][c];
    }
    console.log(sum);
}


