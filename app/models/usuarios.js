
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = newSchema({ //Esto sirve para la publicacion

 //Esto define el tipo de dato que seran nuestras variables y como se van a registrar
 nombre:{
    type: String,
    required: true
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



})