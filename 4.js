console.log('START');


let totalPower = 0;

//onOffState = [false, true]
//power = [Watt]
function Device(onOffState, power) {
    this.onOffState = onOffState,
    this.power = power
}

const notebook = new Device(true, 20);
notebook.color = 'grey';

const lamp = new Device(false, 7);
lamp.weight = 120; //gram

const router = new Device(true, 5);
router.height = 45; //mm

let allDevice = [notebook, lamp, router];

//Подсчет мощности приборов включенных в сеть
for(i in allDevice) {
    if(allDevice[i].onOffState) {
        totalPower = totalPower + allDevice[i].power;
    }
}

console.log('Общая мощность приборов включенных в сеть:', totalPower, 'Вт.');
