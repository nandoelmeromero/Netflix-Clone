const { GENERAL_CHAT } = requiere ("./utils/channels"); //ES un canal, el canal nos permite escuchar en ciertos lados.

const comentarioNuevo = {
    subscribe: (parent,arg,{ pubsub }) => {
        return pubsub.asyncIterator (GENERAL_CHAT) //Esto permite hacer la conexion
    }
};

module.exports = {
    comentarioNuevo
}