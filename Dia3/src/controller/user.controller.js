
let usuario = null;

const getUser = (req, res) => {
    console.log("Peticion recibida del cliente");
    //console.log(req.query);  // Imprimo lo requerido por el cliente
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.status(200).send({ ok: true, message: "Recibido!" });
};

const getBye =  (req, res) => {
    console.log("Peticion recibida del cliente");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.status(200).send({ ok: true, message: "Adios!" });
};



module.exports = { getUser, getBye };