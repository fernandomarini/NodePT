
const Book = require("../models/book")

let book = null;
let books = [
    new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg",1,2),
    new Book("Sombras","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",2,2,),
    ];

const getStart = (req,res) => {
    res.send({ error: true, codigo: 200, mensaje: "Punto de Inicio"});
};

const getBooks = (req,res) => {
    res.send(books);
};

const getBookId = (req,res) => {
    let id = req.params.id_book;
    let libroBuscado = books.find( libro => libro.id_book == id );    
    let respuesta;
    if( libroBuscado != null ){
        respuesta = { error: false, codigo:200, data:libroBuscado };
    }else{
        respuesta = { error: true, codigo:200, mensaje: "El libro buscado no existe"};
    };
    res.send(respuesta);
};

const postBooks = (req,res) => {
    let respuesta;
    if( book === null){
        newBook = new Book(
                        req.body.title,
                        req.body.type,
                        req.body.author,
                        req.body.photo,
                        req.body.price,                        
                        req.body.id_book, 
                        req.body.id_user)
        books.push(newBook);
        respuesta = { error: false, codigo: 200, mensaje: "Libro creado con exito"};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro existe"};
    }
    res.send(respuesta);
    console.log(newBook); // Para corroborar la creacion
};

const putBooks = (req,res) => {
    let respuesta;
    let id = req.body.id_book;
    let libroBuscado = books.find( libro => libro.id_book == id ); 
    if( libroBuscado != undefined){
            libroBuscado.id_book = req.body.id_book; 
            libroBuscado.title = req.body.title;
            libroBuscado.type = req.body.type;
            libroBuscado.author = req.body.author;
            libroBuscado.price = req.body.price;
            libroBuscado.photo = req.body.photo;
            libroBuscado.id_user = req.body.id_user;
        respuesta = { error: false, codigo: 200, mensaje: "Libro actualizado correctamente", data: book};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe", data: book};
    }
    res.send(respuesta);
};

const deleteBooks = (req,res) => {
    let respuesta;
    let deleteBook = books.findIndex( libro => libro.id_book == req.body.id_book ); 
    if( deleteBook != -1){
            books.splice(deleteBook,1);
            respuesta = { error: false, codigo: 200, mensaje: "El libro fue eliminado correctamente", data: book};
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe", data: book};
    };
    res.send(respuesta);
    console.log(books);
};



module.exports = { getStart, getBooks, getBookId, postBooks, putBooks, deleteBooks };
