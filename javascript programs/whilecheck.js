var num = 8;
var k = 0;
var s = 1;

while(s<num){
    if(num%s==0){
        k++;
        s++;
    }
}
if (s == 2){
    console.log('is_prime');
} else {
    console.log('is not prime');
}

