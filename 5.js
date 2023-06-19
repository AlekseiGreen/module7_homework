console.log('START');


let totalPower = 0;

//onOffState = [false, true]
//power = [Watt]
class Device {
    constructor(onOffState, power) {
        this.onOffState = onOffState;
        this.power = power;
    }
    getPower() {
        console.log(this.power);
    }
}

class Notebook extends Device {
    constructor() {
        this.color = 'grey';
    }
}

let notebook = new Device(true, 20);

class Lamp extends Device {
    constructor() {
        this.weight = 120; //gram
    }
}

let lamp = new Device(false, 7);

class Router extends Device {
    constructor() {
        this.height = 45; //mm
    }
}

let router = new Device(true, 5);

let allDevice = [notebook, lamp, router];

//Подсчет мощности приборов включенных в сеть
for(i in allDevice) {
    if(allDevice[i].onOffState) {
        totalPower = totalPower + allDevice[i].power;
    }
}

console.log('Общая мощность приборов включенных в сеть:', totalPower, 'Вт.');
