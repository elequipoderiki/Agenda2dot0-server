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

const mTask = {
    getAll: async () => {
        try {
            const arrayTaskDB = await Task.find()
            
            return arrayTaskDB
        
        } catch (error) {
            throw {message: error.message + "Error al cargar las tareas"}
        }

    }, 
    create: async (body) => {
            try {
                await Task.create(body);
            } catch (err) {
                throw {message: err.message + ` The value for field estado must be among these ones: En progreso, Pendiente, Completado`}
            }

    },
    getTask: async (id) => {
        try {
        const taskDb = await Task.findById({_id:id})
            return taskDb
        } catch(err) {
            throw {message: err.message + 'Tarea no encontrada con el id suministrado'}
        }

    } , 
    update: async(id, body) => {
        try {
            const taskDb = await Task.findByIdAndUpdate(
                // id, body, {useFindAndModify: false}
                id, body, {runValidators: true}
            )
    
        } catch (err) {
            throw {message:`Possible invalid id. Check field estado. The value for field estado must be among these ones: En progreso, Pendiente, Completado`}
        }

    },
    delete : async (id) => {
        try {
            await Task.findByIdAndDelete({_id : id})
        }
        catch (err) {
            throw {message:`Possible invalid id.`}
        }

    }
}
module.exports = mTask;