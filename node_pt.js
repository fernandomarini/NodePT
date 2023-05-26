const { log } = require('console');

/* 
Reto 1
• Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
• Pasados tres segundos, se debe imprimir “Mensaje 2”.
• Y después de que se imprima este mensaje, que se imprima “Mensaje 3
*/
/* 
console.log("Mensaje 1");

setTimeout( function(){
    console.log("Mensaje 2");
    console.log("Mensaje 3");
 },3000);

  */

 /* 
 Reto 2
• Crea un objeto con las siguientes propiedades: name, surname, age.
• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo
 */

/* 
const fs = require('fs');

let persona = { "name": "nombre01",
                "surname": "apellido01",
                "age": 10 };

let personaJson = JSON.stringify(persona, null, 1);

fs.writeFile('persona01.json', personaJson, (err) => {
    if(err) throw err;                  // Detiene ejecucion y envia detalles por consola
        // console.log(`Error: ${err}`)
});

fs.readFile('persona01.json',(err, personaJson)=> {
    if(err) throw err;
    let person = JSON.parse(personaJson);
    console.log(person);
}); 
 */

/* 
Reto 3
• Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
módulo readline de node y solicita los valores del name, surname y age a través de la consola.
• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
readline.
• Este ejercicio debe hacerse en una única ejecución de JavaScript
 */

const fs = require('fs');


let persona = { "name": "", 
                "surname": "",
                "age": 0 }


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un nombre:', (nombre)=>{ 
  rl.question('Ingrese apellido :', (apellido)=>{ 
    rl.question('Ingrese edad :', (edad)=>{ 
                persona.name = nombre;
                persona.surname = apellido;
                persona.age = edad;
                  let data = JSON.stringify(persona, null, 1);
                fs.writeFile('persona_02.JSON', data , (err)=>{
                            if (err)  throw err;
                            //console.log(`Error: ${err} `);
                      fs.readFile('persona_02.JSON', (err, data)=> {
                                  if (err) throw err;
                                  let person = JSON.parse(data);
                                  console.log(person);   
                          rl.close();                             
                });
            });
        }); 
    });
});