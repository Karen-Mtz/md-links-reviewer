let markdownLinkExtractor = require('markdown-link-extractor');
const counting = require("./counting");
const validating = require("./validating");
let fs = require('fs')
let path = require('path')
const chalk = require('chalk');
let options = process.argv[3]

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
    if (options !== "--validate" && options !== "--stats") {
      console.log(chalk.whiteBright('\n' + "FILE:") + chalk.cyan('\n' + mdRoute))
      console.log(chalk.whiteBright('\n' + "LINKS:") + chalk.cyan('\n' + links.join('\n') + '\n'))
    } else if (options == "--stats") {
      counting.counting(links);
    }
    links.forEach((link) => {
      if (process.argv[3] === "--validate") {
        validating.validating(link);
      }
    });
  })
};

module.exports.readingFiles = readingFiles;
