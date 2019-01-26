//En este archivo van las peticiones CRUD de los usuarios

const users = require("../models/usuarios"); //El nombre de la const viene de la carpeta models, que es donde estoy exportando mi modelo.

const crearUsuario = (data) => { //Este metodo es un POST para crear un usuario. "data" viene de schema, es la que mete en el formulario 

	return users.create(data); //create es un metodo de mongoose que literal, crea.

};

const correoUsuario = (correo) => { //Esto postea a un usuario por el "correo", lo trae
	return users.findOne({correo:correo}); //findOne es una funcion de mongoose que se dedica a encontrar una cosa en especifico, un detalle. La variable del lado izquierdo "correo" es como se va a llamar y la del lado derecho "correo" es de donde lo trae"
};

const nombreUsuario = (nombre) =>{
    return users.findOne({usuario:nombre});
}

const actualizarUsuario = (data,nombre) => {

    return users.findOneAndUpdate({nombre:nombre},{$set:data}); //Set data es para actualizar la informacion

}

