
const Book = require("../models/book")

let book = null;

const getStart = (req,res) => {
    res.send({ error: true, codigo: 200, mensaje: "Punto de Inicio"});
};

const getBook = (req,res) => {
    let respuesta;
    if( book != null){
        respuesta = { error: false, codigo: 200, data: book};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe"};
    }
    res.send(respuesta);
};

const postBook = (req,res) => {
    let respuesta;
    if( book === null){
        book = new Book(req.body.id_book, 
                        req.body.title,
                        req.body.type,
                        req.body.author,
                        req.body.price,
                        req.body.photo,
                        req.body.id_user)
        respuesta = { error: false, codigo: 200, mensaje: "Libro creado con exito"};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro existe"};
    }
    res.send(respuesta);
    console.log(book); // Para corroborar la creacion
};

const putBook = (req,res) => {
    let respuesta;
    if( book != null){
            book.id_book = req.body.id_book; 
            book.title = req.body.title;
            book.type = req.body.type;
            book.author = req.body.author;
            book.price = req.body.price;
            book.photo = req.body.photo;
            book.id_user = req.body.id_user;
        respuesta = { error: false, codigo: 200, mensaje: "Libro actualizado correctamente", data: book};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe", data: book};
    }
    res.send(respuesta);
};

const deleteBook = (req,res) => {
  let respuesta;
    if( book != null){
            book = null;
        respuesta = { error: false, codigo: 200, mensaje: "El libro fue eliminado correctamente", data: book};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe", data: book};
    };
    res.send(respuesta);
};



module.exports = { getStart, getBook, postBook, putBook, deleteBook };
