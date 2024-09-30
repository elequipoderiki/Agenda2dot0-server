const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    descripcion: String,
    nombre: String,
    usuario: {type: String, required: true},
    estado: {
        type: String,
        enum: ['Pendiente','En progreso', 'Completado'],
        default: 'Pendiente'
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;