const fs = require ( 'fs' );
const path = require('path'); 

function writeAndRead( path, obj ){

    let objeto = JSON.stringify(obj, null, 1);

    fs.writeFile(path, objeto, (err)=> {
        if(err) throw err;   

        fs.readFile(path, (err, objeto)=> { 
            if(err) throw err;
            let objJson = JSON.parse(objeto);
            console.log(objJson);
        });
    });    
};


// writeAndRead("./miFichero.JSON", { calle: "Teruel", numero: 8 });

module.exports = writeAndRead;
