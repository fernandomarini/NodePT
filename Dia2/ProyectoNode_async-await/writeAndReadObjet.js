const fs = require('fs/promises');
const { monitorEventLoopDelay } = require('perf_hooks');

async function writeAndRead( path, obj ){
    try{
        await fs.writeFile(path, JSON.stringify(obj))
        const nuevaObj = await fs.readFile(path, 'utf8')
        console.log(JSON.parse(nuevaObj));        
    } catch (err) {
        console.log(Err);
    }    

};

// writeAndRead("./miFichero.JSON", { calle: "Teruel", numero: 8 });

module.exports = writeAndRead;
