//En este archivo van las peticiones CRUD de los usuarios, solo las funciones.

const users = require("../models/usuarios"); //El nombre de la const viene de la carpeta models, que es donde estoy exportando mi modelo.

const crearUsuario = (data) => { //Este metodo es un POST para crear un usuario. "data" viene de schema, es la que mete en el formulario 
	return users.create(data); //create es un metodo de mongoose que literal, crea en la parte de data.
};

const correoUsuario = (correo) => { //Esto postea a un usuario por el "correo", lo trae
    return users.findOne({correo:correo}); //findOne es una funcion de mongoose que se dedica a encontrar una cosa en especifico, un detalle. La variable del lado izquierdo "correo" es como se va a llamar y la del lado derecho "correo" es de donde lo trae"
};

const nombreUsuario = (id) =>{    
    return users.findOne({id:id});
}

const actualizarUsuario = (data,id) => {
    return users.findOneAndUpdate({_id:id},{$set:data},{new:true}); //Set data es para actualizar la informacion. new true es para regresar el objeto ya actualizado
}

const todoslosUsuarios = () =>{
    return users.find({}); //Esto regresa todos los usuarios
}

const borrarUsuario = (id) =>{
    return users.findByIdAndDelete(id);
}






module.exports = {
 crearUsuario,
 correoUsuario,
 actualizarUsuario,
 todoslosUsuarios,
 nombreUsuario,
 borrarUsuario
}
