let write = require('./writeAndReadObjet');
let read = require('./readConsole');


read(function(obj){
    write("person.json", obj)
})