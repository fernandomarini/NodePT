const { futimes } = require('fs');
const fs = require ('fs/promises');
const { resolve } = require('path');
const readLine = require ('readline');

let persona = { "name": "", 
                "surname": "",
                "age": 0 };

function readConsole(callback){
    
    function pregunta (pregunta){
        const question = new Promise ((resolve, reject) =>{
            let rl = readLine.createInterface({
                input: process.stdin,
                output: process.stdout
                });
            rl.question(pregunta, (respuesta)=>{              
                            resolve (respuesta);
                            rl.close();
                        });   
        });
        return question;
    };
    pregunta("Ingrese su nombre: ")
    .then((name) => {
        persona.name = name;
    return pregunta("Ingrese su Apellido: ")
    })
    .then((surname) => {
        persona.surname = surname;
    return pregunta("Ingrese su edad: ")
    }) 
    .then((age) => {
        persona.age = age;
    return fs.writeFile("usuario.JSON", JSON.stringify(persona))
    })
    .then(() => {
        return fs.readFile("usuario.JSON", "utf-8")
    })
    .then(data => {
        callback(JSON.parse(data) );
    })
    .catch(err => {
        console.log(err);
    })

};

//readConsole(console.log);

module.exports = readConsole;