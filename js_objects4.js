// var items = ['a', 'b', 'c', 'm', 'b', 'a'];
// var a1 = [];

// for (var i = 0; i<items.length; i++) {
//     var exists = false;
//     for (var j = 0; j < a1.length; j++) {
//         if (items[i] == a1[j]){
//             exists == true;
//             break;

//         }
//     }
//     if(!exists) {
//         a1.push(items[i]);
//     }
    
// }
// console.log(a1);

var items1 = ['a', 'a+', 'b', 'b', 'b'];
var a3 = [];
for (var k = 0; k<items1.length; k++){
    
    for (var l = k+1; l<items1.length; l++){
        if(items1[l] == items1[k]){
            a3.push(items1[k]);
        }
    }


}
console.log(a3);
var items_obj = {};
for (var k = 0; k<items1.length; k++) {
    var char = items_obj[k];
    items_obj[char] = true;

}
console.log(Object.keys(items_obj));

var square = {
    side: 4,
    area: function() {
        console.log("Area - " + this.side ** 2);
    }
}
square.area();
square.side = 5;
square.area();


var numbers = {
    data: [1,2,3,5,0,4,8,12,14,29],
    lessthan: function(val) {
        var items = [];
        for(var i = 0; i<this.data.length; i++) {
            if(this.data[i] < val){
                items.push(this.data[i]);
            }
        }
        return items;
    },
    
    
    greaterthan: function (val) {
        var items = [];
        for(var i = 0; i<this.data.length; i++) {
            if(this.data[i] > val){
                items.push(this.data[i]);
            }
        }
        return items;

    }
}

var lesser = numbers.lessthan(10);
var greater = numbers.greaterthan(10);
console.log("L-" + lesser.join(","));
console.log("G-" + lesser.join(","));

