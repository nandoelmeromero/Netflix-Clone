//Estos son mis modelos 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PeliculasSchema = newSchema({

    nombrePelicula:{
        type: String,
        required: true
    },

    clasificacion:{
        type: String,
        enum: ["Terror","Heorismo","Accion","Romanticismo"]
    },

    sinopsis:{
        type: String,
        required: true
    },

    director:{
        type: String,
        required: true
    },

    duracion:{
        type:String,
        required: true
    },

    portadaPelicula:{
        type: String,
        required: true
    },

    puntuacion:{
        type: Number,
        required: true
    },

    urlPelicula:{
        type: String,
        required: true
    },

    is_active:{
        type: Boolean,
        required: true
    }


}, { "collection": "movies", "timestamps": true })

mongoose.Types.ObjectId.prototype.valueOf = function () { //
	return this.toString();
};

module.exports = mongoose.model("movies", UserSchema);