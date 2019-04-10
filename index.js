#!/usr/bin/env node

const gettingPath = require('./gettingPath') 
let path = require('path');
let arg = path.resolve(process.argv[2]);
exports.arg = gettingPath.gettingPath(arg);

/* EXPORTANDO ARGUMENTO DE LA LÍNEA DE 
COMANDO PARA EL RESTO DE LAS FUNCIONES */