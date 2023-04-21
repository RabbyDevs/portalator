const prompt = require('prompt-sync')();

const resourceTable = {
	'Aluminum': 0,
	'Chromium': 0,
	'Copper': 0,
	'Diamond': 0,
	'Gold': 0,
	'Iron': 0,
	'Oil': 0,
	'Phosphate': 0,
	'Titanium': 0,
	'Tungsten': 0,
	'Uranium': 0,
	'Electronics': 0,
	'Fertilizer': 0,
	'Motor Parts': 0,
	'Consumers': 0,
	'Steel': 0,
	'Aircraft Parts': 0,
};

const modifier = prompt('whats ur factory output %? ');
const cities = prompt('city count? ');
const consumerAmount = Math.floor((40 + modifier)) * cities;

resourceTable.Consumers = consumerAmount;

// ok ill do this stuff later im tired