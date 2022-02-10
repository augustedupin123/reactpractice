var year = 2020;
if(year%4 ===  0){
    if(year%100 === 0){
        if(year%400 === 0){
            console.log("the year" + year + "is lear year");
        }else{
            console.log("the year" + year + "is not leap year");
        }
    }
}

var tomr = "sunny";
if (tomr == "rain"){
    console.log("take a raincoat");
}else{
    console.log("no need to take");
}