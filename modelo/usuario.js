const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var UsuarioSchema = new Schema({
    imagen : String,
    nombre : String,
    apellido : String,
    correo : String,
    contrasena : String,
    rol : String,
    direccion : String,
    celular : String, 
    medicamentos : Array, 
    estado : Boolean
});

module.exports = mongoose.model('usuario', UsuarioSchema);