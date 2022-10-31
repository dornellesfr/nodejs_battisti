const fs = require('fs');

fs.readFile(`1.Introducao/modulos/modificado.txt`, 'utf8', (err, data) => {
  if(err) return console.log(err);
  console.log(data);
});