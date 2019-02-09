const actions = require("../actions");

const prueba = () =>{

 return "Esto es una prueba";

}

const Usuarios = (_,args,context,info) =>{ //Son parametros de graph. args son los datos que nos madna el cliente, context es la variable que se comparte coon querys y mutations. Info es el query que se ejecuta en playground

    return actions.todoslosUsuarios().then(users => users)
    .catch(e => e );

};


const Peliculas = (_,args,context,info) => {

    return actions.todasLasPeliculas().then(movies => movies)
    .catch( e => e);

}

const Usuario = (_,args,context,info) => {
    return actions.nombreUsuario().then(users => users)
    .catch( e => e);
}

const Pelicula = (_,args,context,info) => {
    return actions.nombrePelicula().then(movies => movies)
    .catch( e => e);
}



module.exports = {
    prueba,
    Usuarios,
    Usuario,
    Peliculas,
    Pelicula,
}