//Este archivo manda a llamar al Schema y levanta el server
const Config = require("./config");//Trae la conexion a la base de datos
const { GraphQLServer,PubSub } = require("graphql-yoga"); //Ayuda a levantar el server. PubSub te permite la conexion del socket
const resolvers = require("./resolvers");//Son todas las resolvers (Querys y mutations) de Graphql
const { importSchema } = require("graphql-import");//Convierte el Schema.graphql en js puro. Se ponen el llaves por que se encapsulan y son palabras reservadas
const { makeExecutableSchema } = require("graphql-tools");//Es para crear el esquema de Graphql, es la combinacion entre los resolvers y el Schema.graphql
const typeDefs = importSchema("./app/schema.graphql");// Es el Schema.graphql
const mongoose = require("mongoose"); //Driver de mongo

const pubsub = new PubSub(); //Permite hacer la conexion


//Todo eso ayuda a conectar a la BD
mongoose.connect(Config.db.url, { useNewUrlParser: true }); //Conecta a la BD
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))// on es un observable, esto observa siempre, si pasa un error se activa y .once es lo mismo pero solo se ejecuta una sola vez
    .once("open", () => console.log("Connected to database")); //Esto valida la coneccion y regresa un error en caso de que no se pueda


const schema = makeExecutableSchema({ //makeExecutableSchema Se encarga de crear el schema de graphql, necesita la deficion de los datos qye es el archivo schema.graphql y los resolvers, es la combinacion de ambos
	typeDefs,
	resolvers,
});

//Este crea el server
const server = new GraphQLServer({ //Aqui se crea el server
	schema, //Este es el schema de graphql
	context: req => ({...req,pubsub}) //Context (palabra reservada) es la variable global que va a traer el objeto request con sus headerss, nos permite acceder a las variables. pubsub se agrega al contexto para poder consumimirla
});

const options = { //son opciones de configuracion para el servidor
	port: process.env.PORT || 8000, //Checa variables de entorno del sistema
	endpoint: "/graphql", //Aqui esta todo graphql
	playground: "/playground",//Es donde "juego" (consulto) con graphql
};

//Esto ya levanta el server
server.start(options, 
	({ port }) => console.log(`Magic start in port ${port}`));

module.exports = { schema };//Hacemos exportable el schema para los testings