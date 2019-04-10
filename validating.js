let fetch = require('node-fetch');
const arg = require("./index");

/*
RECIBIENDO LINKS Y CON FETCH
SE VERIFICA EL STATUS DE CADA LINK
*/
const validating = (link) => {
  fetch(link)
    .then(res => {
      console.log(arg + " " + res.statusText + " " + res.status + " " + res.url);
    });
};
module.exports.validating = validating;
