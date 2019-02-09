const actions = require("../actions");
const { storeUpload } = require("../utils");

//Metodo Post.
const crearUsuario = (_,args,context, info) =>{ console.log(args)
    const data = {nombre:args.nombre,apellido:args.apellido,correo:args.correo,contrasena:args.contrasena}
    return actions.crearUsuario(data).then((user) => user).catch( e => e ); 
}

const crearPelicula = async (_,args,context,info) => { //Con async indicas que ahi se hace la promesa
    
    
    //REVISAR
    const data = { nombrePelicula:args.data.nombrePelicula, director:args.data.director,sinopsis:args.data.sinopsis,urlPelicula:args.data.urlPelicula,duracion:args.data.duracion}
    const { createReadStream,filename } = await args.data.portadaPelicula;
    const stream = createReadStream();
    const { url } =  await storeUpload({stream,filename}); //await indica que ahì regresas la promesa
    
    console.log(url);
    data.portadaPelicula = url;
    console.log(data.portadaPelicula)
    
    return actions.crearPelicula(data).then(
		token => { return { "message": "Portada Agregada correctamente", token: token }; }
	).catch(e => e);
    //REVISAR
    
    /* console.log(data); */
    actions.crearPelicula(args.data).then((movies) => movies).catch( e => e );
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