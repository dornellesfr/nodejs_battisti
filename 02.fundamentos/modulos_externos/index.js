const minimist = require('minimist');

const arg = minimist(process.argv.slice(2));

const name = arg.name;

console.log(name);