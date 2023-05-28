const fs = require ( 'fs/promises' );
const path = require('path'); 

function writeAndRead( path, obj ){

    let objeto = JSON.stringify(obj, null, 1);

    fs.writeFile(path, JSON.stringify(obj))
    .then( ()=> {
    return fs.readFile(path, 'utf8')
    })
    .then( data => {
        console.log(JSON.parse(data));
    })
    .catch( err=> {
        console.log(err);
    }) 
};


// writeAndRead("./miFichero.JSON", { calle: "Teruel", numero: 8 });

module.exports = writeAndRead;