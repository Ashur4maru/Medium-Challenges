// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1;
let getal2;
let som = 0;
let deling = 0;
let verschil = 0;
let product = 0;

getal2 = parseFloat(await userInput.question('Voer een getal in: '))
getal1 = 33;

som = getal1 + getal2;
deling = getal1 / getal2;
verschil = getal1 - getal2;
product = getal1 * getal2;

console.log(som, verschil, product, deling);

process.exit();