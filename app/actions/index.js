const userActions = require("./usuariosAction");
const movieActions = require("./peliculasAction");

module.exports = {
    ...userActions, //Crea una copia de los actions y los junta dentro de un objeto
    ...movieActions
}