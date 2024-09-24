import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let geboorteJaar;
let toekomstJaar;
let leeftijd1;
let leeftijd2;

geboorteJaar = parseFloat(await userInput.question('In welke jaar ben je geboren? '));
toekomstJaar = parseFloat(await userInput.question('Hoe oud zal ik zijn in: '))

leeftijd1 = toekomstJaar - geboorteJaar;
leeftijd2 = leeftijd1--;



console.log('In ' + toekomstJaar + ' zal ik ' + leeftijd1 + ' of ' + leeftijd2 + ' jaar oud zijn.');

process.exit();
