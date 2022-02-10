var age = 22;
var gender = "m";

if (gender == "f"){
    if (age > 18){
        console.log("can get married");
    } else {
        console.log("illegal");
    }
} else {
    if (age > 21){
        console.log("can get married");
    } else {
        console.log("illegal marriage");
    }

}

if (gender == "f" && age > 18){
    console.log("can get married");
} else if (gender == "f" && age<=18) {
    console.log("illegal");
} else if (gender == "m" && age > 21){
    console.log("can get married");
} else {
    console.log("illegal marriage");
}



