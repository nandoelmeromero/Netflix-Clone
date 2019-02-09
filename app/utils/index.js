const jwt = require("jsonwebtoken");
const { SECRET_KEY,CLOUDINARY_NAME, CLOUDINARY_API_KEY,CLOUDINARY_SECRET_KEY } = require("../config");
const { nombreUsuario } = require("../actions");
const cloudinary = require("cloudinary");

const result = require("dotenv").config(); //Manda a llamar la libreria de dotenv, y config es un metodo para configurar las variables.

if(result.error){
    throw result.error;
}

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY
}) //Manda a llamar a cloudinary y se configura con las variables de entorno

//Esto es para hashear y verificar el password
function getUserId (contex) {
    const Authorization = contex.request.get("Authorization "); //Esto verifica que estoy logueado
    if (Authorization){
        const token = Authorization.replace("JWT"," "); //Verifica
        const { _id } = jwt.verify(token,SECRET_KEY); //Vamos a comparar el token con el secret_key
        return nombreUsuario(_id); //Esto usa el action y busca por id.
    }

}
//------

//Esto es para cloudinary
function storeUpload ({stream,filename}) { //stream es como un arroyo que manda los datos, filename es el nombre del archivo
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY //Esto se mete al sistema operatvo
    });
    
    console.log("3");
    
    return new Promise ((resolve,reject) => {
        const buffer = cloudinary.v2.uploader.upload_stream(function(error,result){ //upload_stream sube las cosas
            if (error) reject(error); //Esta madre verifica si hay un error
            resolve(result); //Esta madre verifica si jala o no
        });
        
        stream.pipe(buffer) //Si jalo, lo guarda en buffer
    })
}


module.exports = {
    getUserId,
    storeUpload
}