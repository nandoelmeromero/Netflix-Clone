
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = newSchema({ //Esto sirve para la publicacion

 //Esto define el tipo de dato que seran nuestras variables y como se van a registrar
 nombre:{
    type: String,
    required: [true, "El nombre es obligatorio"] //Con esto, mongoose te dice lo que te hace falta
 },

 apellido:{
    type: String,
    required: true
 },

 correo:{
    type: String,
    required: true
 },

 contraseña:{
    type: String,
    required: true
 },

 suscripcion:{
    type: Boolean,
    required: true
 },

 is_active:{
    type: Boolean,
    required: true
 }



},{ "collection": "users", "timestamps": true }) ; //Collection es el nombre de la coneccion y se llamara user. timestamps crea dos campos, uno de create add y update add

mongoose.Types.ObjectId.prototype.valueOf = function () { //
	return this.toString();
};

module.exports = mongoose.model("users", UserSchema);

//ME falta exportar el token y traer la libreria de bycript