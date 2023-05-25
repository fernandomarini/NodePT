const fs = require ( 'fs' );
const { monitorEventLoopDelay } = require('perf_hooks');
const readLine = require ('readline');

let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readConsole(callback){

    let persona = {name: "", surname: "", age:""};

    rl.question('Ingrese un nombre:', (nombre)=>{ 
        rl.question('Ingrese apellido :', (apellido)=>{ 
            rl.question('Ingrese edad :', (edad)=>{ 
                    persona.name = nombre;
                    persona.surname = apellido;
                    persona.age = edad;
                    let data = JSON.stringify(persona, null, 1);
                fs.writeFile('usuario.JSON', data , (err)=>{
                        if (err)  throw err;
                    fs.readFile('usuario.JSON', (err, data)=> {
                            if (err) throw err;
                            let person = JSON.parse(data);
                            callback(person);   
                        rl.close();                             
                    });
                });
            }); 
        });
    });
};

//readConsole(console.log);

module.exports = readConsole