let write = require('./writeAndReadObjet');
let read = require('./readConsole');


write("./miFichero.JSON", { calle: "Teruel", numero: 8 });

read(console.log);