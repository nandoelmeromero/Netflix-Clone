const actions = require("../actions");

//Metodo Post.
const crearUsuario = (_,args,context, info) =>{ console.log(args)
    const data = {nombre:args.nombre,apellido:args.apellido,correo:args.correo,contrasena:args.contrasena}
    return actions.crearUsuario(data).then((user) => user).catch( e => e ); 
}

const crearPelicula = (_,args,context,info) => {
    const data = { nombrePelicula:args.nombrePelicula, director:args.director,clasificacion:args.clasificacion,sinopsis:args.sinopsis,urlPelicula:args.urlPelicula}
    return actions.crearPelicula(data).then((movies) => movies).catch( e => e );
}

//Metodo Update.
const actualizarUsuario = (_,args,context,info) =>{
    const data = {nombre:args.nombre,apellido:args.apellido }//Con esto indico que voy a actualizar nombre y apellido
    return actions.actualizarUsuario(data,args.id); //data, recibe la info y args.id te trae el id
}


//Metodo Delete.
const borrarUsuario =  (_,args,context,info) => {
    return actions.borrarUsuario(args.id).then(()=> "Usuario borrado exitosamente");
}

const borrarPelicula = (_,args,context,info) => { 
    return actions.borrarPelicula(args.id).then(() => "Pelicula borrada exitosamente");
}




module.exports = {
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    crearPelicula,
    borrarPelicula,
}