// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => {
    let copyofDrivers = [...drivers];
    return copyofDrivers.splice(0, 2);
};

const returnLastTwoDrivers = () => {
    let copyofDrivers = [...drivers];
    return copyofDrivers.splice(2);
};

// console.log(returnFirstTwoDrivers(drivers));
// console.log(returnLastTwoDrivers(drivers));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//console.log(selectingDrivers[0]);
// console.log(selectingDrivers[1](drivers));

function createFareMultiplier(integer) {
    const fareMultiplier = () => integer * integer;
    return fareMultiplier;
}

console.log(createFareMultiplier(2));

const fareDoubler = (fare) => fare * 2;

console.log(fareDoubler(10));

const fareTripler = (fare) => fare * 3;

console.log(fareTripler(12));


function selectDifferentDrivers(drivers, callBack) {
    return callBack(drivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));