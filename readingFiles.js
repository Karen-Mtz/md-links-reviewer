let markdownLinkExtractor = require('markdown-link-extractor');
const counting = require("./counting");
const validating = require("./validating");
let fs = require('fs')

/*
RECIBIENDO RUTA DE ARCHIVO
MD PARA LEERLO, CONVERTIRLO
A STRING Y BUSCAR LINKS POR AHORA
SOLO BUSCARÁ LINKS CON MARKDOWN LINK
EXTRACTOR LOS ENVIARÁ A LA FUNCIÓN
DE VALIDAR Y STATS
*/

const readingFiles = (mdRoute) => {
  fs.readFile(mdRoute, 'utf-8', (err, content) => {
    if (err) {
      return console.log(err);
    }
    let links = markdownLinkExtractor(content);
    links.forEach((link) => {
      if (process.argv[3] === "--validate") {
        validating.validating(link);
      }
    });
    if (process.argv[3] === "--stats") {
      counting.counting(links);
    }
  });
};
module.exports.readingFiles = readingFiles;
