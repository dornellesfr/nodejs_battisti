const readline = require('readline-sync');
const chalk = require('chalk');

const name = readline.question('Qual o seu nome?');
const age = readline.question('Qual sua idade?');

console.log(chalk.bgYellow.black(`Seu nome é ${name}, sua idade é ${age}`));
