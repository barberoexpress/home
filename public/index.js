const app = require('./app');
const config = require('./config')


app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Desarrollado por: Cristian Franco Bedoya, Santiago R. Alvarez Gomez");
    console.log("Ramla Pro. Software & Santiago R. Álvarez");
    console.log("2017")
});
