let fs = require('fs');
let path = require('path');
const arg = require("./index");
const readingFiles = require("./readingFiles");

/*
RECIBIENDO ARGUMENDOS DE LA LÍNEA DE COMANDO:
FUNCIÓN QUE IDENTIFICA SI LA RUTA INGRESADA EN CLI
ES DE UN ARCHIVO O DE UN DIRECTORIO:
*/

const gettingPath = (arg) => {
  let mdFiles = [];
  fs.stat(arg, (err, stats) => {
    if (err) {
      console.err(); //consolear error
      return;
    }
    if (stats.isDirectory() == true) {
      let files = fs.readdirSync(arg);
      // console.log(files)
      files.forEach(file => {
        if (path.extname(file) === ".md") {
          mdFiles.push(path.join(arg, file));
        }
      });
      readingFiles(mdFiles.toString());
      return mdFiles;
      // console.log(mdFiles)
    }
    else {
      readingFiles(arg);
      return arg;
    }
  });
};

