const salary = 4000;
const lodging = 'apartment';
const size = 'large';

// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
};

const tax = {
    734: 0.3,
    234: 0.2,
    913: 0.12,
    415: 0.38,
    502: 0.42,
};

const rent = {
    none: 0,
    small_room: 200,
    large_room: 300,
    small_apartment: 400,
    large_apartment: 800,
    small_house: 1200,
    large_house: 2400,
};

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913] / 100);
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = lodging + '-' + size;
const balance = startingAfterTax - expenses.transport - expenses.food - rent.large_room;
console.log(balance.toFixed(2));
