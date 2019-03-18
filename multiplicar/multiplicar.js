const fs = require('fs');
var colors = require('colors');

// el limite = 10 se puede hacer en ecmascript 6, permite definir valores default  
let listarTabla = (base,limite = 10) =>{

    
    console.log('===================='.green);
    console.log(`===tabla de ${base} =`.green);
    console.log('===================='.green);

    let data = '';

        if (!Number(base)){
            reject(`No es un numero`);
            return;
        }

        for (let i = 1; i<= limite; i++)
        {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        console.log('La tabla es:\n',data);
      
  }


  let crearArchivo = ( base , limite) => {
      return new Promise ( (resolve,reject) => {
            let data = '';

            if (!Number(base)){
                reject(`No es un numero`);
                return;
            }

            for (let i = 1; i< limite; i++)
            {
                data += `${base} * ${i} = ${base * i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data , (err) => {
                if (err) {
                    reject(err);
                } else{
                    resolve(`tabla-${base}-al-${limite}.txt`);
                }
            });
      }

      );
  }

  module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
  }