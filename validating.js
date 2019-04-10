let fetch = require('node-fetch');
const arg = process.argv[2]
const chalk = require('chalk');
const statusText = chalk.whiteBright.bgGreen

/*
RECIBIENDO LINKS Y CON FETCH
SE VERIFICA EL STATUS DE CADA LINK
*/
const validating = (link) => {
  fetch(link)
    .then(res => {
      // console.log(arg + " " + res.statusText + " " + res.status + " " + res.url);
      console.log(statusText(res.statusText + " " + res.status + " " + res.url + " " + arg))
    
    });
};
module.exports.validating = validating;
