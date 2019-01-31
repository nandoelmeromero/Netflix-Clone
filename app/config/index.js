//Esto hace una pre conexion a la base de datos

const NODE_ENV = process.env.NODE_ENV || "dev"; 

const ENVS = {

    dev: {
        
        SECRET_KEY:"v1wM7fap69yohwpc5Zd0", //Esto es random, cualquiera puede ser
        db: {
            url: "mongodb://nandoelmeromero:C11D10E09a@ds211875.mlab.com:11875/netflixclone"
        },
        port: 3000
    },

    test: {
        SECRET_KEY:"v1wM7fap69yohwpc5Zd0", //Esto es random, cualquiera puede ser
        db: {
            url: "mongodb://testingnetflixclone:C11D10E09a@ds113825.mlab.com:13825/netflixclonetest"
        },
        
    },

    production:{ //Esto es para setearlo por varibales de entorno. Agarramos una base de datos de MBLab
        SECRET_KEY:procces.env.SECRET_KEY, 
        db: {
            url: procces.env.MONGO_URL
        },
        
    }

};

module.exports = ENVS[NODE_ENV];