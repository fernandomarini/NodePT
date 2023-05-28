
 /* 
 Reto 2
• Crea un objeto con las siguientes propiedades: name, surname, age.
• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo
 
const fs = require('fs/promises');

let persona = { "name": "Fer",
                "surname": "apellido01",
                "age": 10 };

fs.writeFile('persona.json', JSON.stringify(persona))
.then( ()=> {
    return fs.readFile('persona.json', 'utf8')
})
.then( data => {
    console.log(JSON.parse(data));
})
.catch( err=> {
    console.log(err);
})
  */

/* 
Reto 3
• Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
módulo readline de node y solicita los valores del name, surname y age a través de la consola.
• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
readline.
• Este ejercicio debe hacerse en una única ejecución de JavaScript
 */
const { futimes } = require('fs');
const fs = require ('fs/promises');
const { resolve } = require('path');
const readLine = require ('readline');


let persona = { "name": "", 
                "surname": "",
                "age": 0 };

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
return fs.writeFile("persona_03.json", JSON.stringify(persona))
})
.then(() => {
    return fs.readFile("persona_03.json", "utf-8")
})
.then(data => {
    console.log(JSON.parse(data) );
})
.catch(err => {
    console.log(err);
})