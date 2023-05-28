
 /* 
 Reto 2
• Crea un objeto con las siguientes propiedades: name, surname, age.
• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo

const fs = require('fs/promises');

let persona = { "name": "nombre01",
                "surname": "apellido01",
                "age": 10 };

async function asyncAwait(){

    try{

        await fs.writeFile('persona.json', JSON.stringify(persona))

        const nuevaPers = await fs.readFile('persona.json', 'utf8')

        console.log(JSON.parse(nuevaPers));
    } catch (err) {
        console.log(Err);
    }    

};

asyncAwait();
*/

/* 
Reto 3
• Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
módulo readline de node y solicita los valores del name, surname y age a través de la consola.
• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
readline.
• Este ejercicio debe hacerse en una única ejecución de JavaScript
*/

const fs = require ('fs/promises');
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

async function cargaDatos(){

    try {
        persona.name = await pregunta ( "Ingrese su nombre: " );        
        persona.surname = await pregunta ( "Ingrese su Apellido: " );
        persona.age = await pregunta ( "Ingrese su edad: " );
        await fs.writeFile("persona_3B.json", JSON.stringify(persona));
        const nuevaPers = await fs.readFile("persona_3B.json", "utf8");
        console.log(JSON.parse(nuevaPers));
    }catch (err){
        console.log(err);
    };

};

cargaDatos();