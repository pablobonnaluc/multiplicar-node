const opts = {
    base: {
        demand:true,
        alias: 'b'
    },
    limite: {
        alias:'l',
        default: 50
    }
    
}

const argv = require('yargs')
                .command('listar','imprime en consola la tabla de multiplicar',opts)
                .command('crear','Crea un archivo de tabla con limite',opts)
                .help()
                .argv;

module.exports = {
    argv
}
