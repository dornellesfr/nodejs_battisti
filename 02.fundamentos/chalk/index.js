const chalk = require('chalk');

const nota = 5;

if (nota > 6) {
  console.log(chalk.green('Você foi aprovado'));
} else {
  console.log(chalk.bgRed('Você foi reprovado'));
}

// npm install chalk@4.1.2