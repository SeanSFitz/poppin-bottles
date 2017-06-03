var investment = process.argv[2];

var bottles = require('./bottles');

var wallet = bottles.bottleCalculator(investment);

var totalBottles = wallet.bottlesPurchased + wallet.bottlesFromCaps + wallet.bottlesFromEmpties;

console.log(`An investment of $${investment} will get you ${totalBottles} bottles.`);
console.log(`${wallet.bottlesPurchased} of these bottles were from the initial purchase.`);
console.log(`${wallet.bottlesFromCaps} of these bottles were from redeeming caps.`);
console.log(`${wallet.bottlesFromEmpties} of these bottles were from redeeming empties.`);

console.log(`\nYou will have the following amounts remaining after redeeming all your caps and empties:`);
console.log(`${wallet.dollars} dollars`);
console.log(`${wallet.caps} caps`);
console.log(`${wallet.empties} empties`);



