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
        port: 3000
    },

    production:{

    }

};

module.exports = ENVS[NODE_ENV];