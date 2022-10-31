console.log(process.argv);

const flag = process.argv.slice(2);

const name = flag[0].split('=')[1];

console.log(name);