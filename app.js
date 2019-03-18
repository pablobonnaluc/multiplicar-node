
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

const argv = require('./multiplicar/config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
            listarTabla(argv.base,argv.limite);
            break;
    case 'crear':
            crearArchivo(argv.base,argv.limite).
                then( archivo => {
                    console.log(`el archivo creado con nodemon es ${archivo}`.gray);
                })
                .catch( err => {
                    console.log(err);
            });
            break;
    default:
            console.log('comando no reconocido');
           
    
}

//console.log(argv);

//let base = 5;

//let argv2 = process.argv;
//console.log(argv.base);
//console.log('el limite es:',argv.limite);
//console.log(argv2);


//let parametro = process.argv[2];
//let base = parametro.split("=")[1];

/*crearArchivo(base).
    then( archivo => {
        console.log(`el archivo creado con nodemon es ${archivo}`);
    })
    .catch( err => {
        console.log(err);
    })*/
