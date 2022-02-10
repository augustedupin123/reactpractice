// let car = {
//     name: 'Maruti 800',
//     topSpeed: 89,
//     run: function (){
//         console.log('car is running');
//     }
// }
// console.log(car);
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`this car is slower than mercedes by ${200 - this.topSpeed}km/h than mercedes`);
    }
}
car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('BMW', 250);
// console.log(car1);
// console.log(car2);
console.log(car2.analyze());