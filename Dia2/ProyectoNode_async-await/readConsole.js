
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

async function readConsole(callback){

    try {
        persona.name = await pregunta ( "Ingrese su nombre: " );        
        persona.surname = await pregunta ( "Ingrese su Apellido: " );
        persona.age = await pregunta ( "Ingrese su edad: " );
        await fs.writeFile("usuario.json", JSON.stringify(persona));
        const nuevaPers = await fs.readFile("usuario.json", "utf8");
        callback(JSON.parse(nuevaPers));
    }catch (err){
        console.log(err);
    };

};

// readConsole(console.log);

module.exports = readConsole;