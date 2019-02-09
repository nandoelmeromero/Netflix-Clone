//En este archivo van las peticions CRUD de las peliculas
const movies = require("../models/peliculas");

const todasLasPeliculas = () =>{
    return  movies.find({});
}

const nombrePelicula = (nombrePelicula) =>{
    return movies.findOne({pelicula:_id})
}


const borrarPelicula = (id) => {
    return movies.findByIdAndDelete(id);
}

const crearPelicula = (data) =>{
    return movies.create(data);
}



module.exports = {
   
    todasLasPeliculas,
    nombrePelicula,
    borrarPelicula,
    crearPelicula,


}