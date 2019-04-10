let fetch = require('node-fetch');
const arg = process.argv[2]

/*
RECIBIENDO LINKS Y CON FETCH
SE VERIFICA EL STATUS DE CADA LINK
*/
const validating = (link) => {
  fetch(link)
    .then(res => {
      // console.log(arg + " " + res.statusText + " " + res.status + " " + res.url);
      console.log(res.statusText + " " + res.status + " " + res.url + " " + arg)
    
    });
};
module.exports.validating = validating;
