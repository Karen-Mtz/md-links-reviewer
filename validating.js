let fetch = require('node-fetch');
const arg = process.argv[2]
const chalk = require('chalk');

/*
RECIBIENDO LINKS Y CON FETCH
SE VERIFICA EL STATUS DE CADA LINK
*/
const validating = (link) => {
  fetch(link)
    .then(res => {
      if(res.status == 404) {
        console.log(chalk.red(res.statusText + " " + res.status) + chalk.blue(" " + res.url) + " " + '\n' + "FILE: " + arg)
      } else {
      console.log(chalk.green(res.statusText + " " + res.status) + chalk.blue(" " + res.url) + " " + '\n' + "FILE: " + arg)
    }
    //falta imprimir texto dentro del link
    });
};
module.exports.validating = validating;
