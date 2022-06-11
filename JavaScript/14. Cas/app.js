// const auto = {
//     marka:"audi",
//     model: "a7",
//     maxBrzina:260,
//     trenutna: 0,
//     drive: function() {
//          this.trenutna + 20;
//     },
//     break:function(){
//         this.trenutna -10
//     },
//     stop:function(){
//         this.trenutna - this.trenutna

//     }


// } 
// console.log(auto.drive())


const car = {
    mark: "Audi",
    model: "a4",
    maxSpeed: 220,
    currentSpeed: 0,
    drive: function (value) {
        if (this.currentSpeed + value > this.maxSpeed) {
            return "ne moze ovo ovako";
        } else {
            return this.currentSpeed += value;
        }
    },
    brake: function (value) {
        return (this.currentSpeed -= value);
    },
    stop: function () {
        return (this.currentSpeed = 0);
    }
};

console.log(car);

car.drive(180);
console.log(car.drive(43));