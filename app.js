//require
//require-/ const fs = require('express');
//require-/ const fs = require('./fs);

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`Comando ${comando} no reconocido`);
}

// let base = '';

// for (let i = 1; i <= 10; i++) {
//     crearArchivo(i)
//         .then(archivo => console.log(`Archivo creado: ${archivo}`))
//         .catch(err => console.log(err));
// }

//let argv2 = process.argv;


// let parametro = argv[2];
// let base = parametro.split('=')[1]
//console.log(argv.base);