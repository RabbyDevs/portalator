const prompt = require('prompt-sync')();
const Decimal = require('decimal.js');

const modifier = prompt('whats ur factory output %? ');
const cities = prompt('city count? ');
const consumerAmount = Math.floor((40 * (1 + modifier / 100)));
const consumerFactories = Math.ceil((consumerAmount * cities) / consumerAmount);

const electronicsAmount = consumerFactories * 3;
const electronicsFactories = Math.ceil(electronicsAmount / (16 * (1 + modifier / 100)));
const goldAndCopper = electronicsFactories * 2;

const fertilizerAmount = consumerFactories * 2.5;
const fertilizerFactories = Math.ceil(fertilizerAmount / (12 * (1 + (modifier / 100))));
const phosphate = fertilizerFactories * 3.5;

const motorsAmount = consumerFactories * 2.5;
const motorsFactories = Math.ceil(motorsAmount / (6 * (1 + (modifier / 100))));
const tungsten = motorsFactories * 2;

const steelAmount = motorsFactories;
const steelFactories = Math.ceil(steelAmount / (3 * (1 + (modifier / 100))));
const iron = steelFactories * 4;
const titanium = Decimal.mul(steelFactories, 0.2);

console.log(`Electronic Factories: ${electronicsFactories}\n	Gold: ${goldAndCopper}\n	Copper: ${goldAndCopper}`);
console.log(`Fertilizer Factories: ${fertilizerFactories}\n	Phosphate: ${phosphate}`);
console.log(`Motor Factories: ${motorsFactories}\n	Steel: ${steelAmount}\n	Tungsten: ${tungsten}`);
console.log(`Steel Factories: ${steelFactories}\n	Iron: ${iron}\n	Titanium: ${titanium}`);