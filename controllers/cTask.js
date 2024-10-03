const Task = require('../models/mTask');

const cTask = {
    getAll: async (req, res) => {

        try {
            const arrayTaskDB = await Task.find()
            
            res.json({arrayTaskDB})
        
        } catch (error) {
            console.error(error)
        }
        
    },

    create: async(req, res) => {
        const body = req.body;
        if(body) {
            try {
                await Task.create(body);
                res.json({err: false, message: 'Tarea agregada'})
            } catch (err) {
                res.status(500).json({err:true, message: err.message + ` The value for field estado must be among these ones: En progreso, Pendiente, Completado`})
            }

        } else {
            res.status(404).json({err:true, message: 'Falló crear tarea'})
        }
    },

    getTask: async (req, res) => {
        const id = req.params.id;
    
        if (id) {
            const taskDb = await Task.findById({_id:id})
            if (taskDb) {
                res.json({taskDb})
            } else {
                res.status(404).json({
                    err: true,
                    message: 'Tarea no encontrada'
                })
            }
        } else {
            res.status(404).json({err: true, message: 'Ingrese campo Id'})
        }

    },

    update: async (req, res) => {
    
        const id = req.params.id;
    
        if (id) {
            try {
                const body = req.body
                const taskDb = await Task.findByIdAndUpdate(
                    id, body, {useFindAndModify: false}
                )
        
                res.json({
                    err: false,
                    message: 'Tarea editada'
                })
            } catch (err) {
                res.status(500).json({err:true, message: err.message + ` The value for field estado must be among these ones: En progreso, Pendiente, Completado`})
            }
        } else {
            res.status(404).json({err: true, message: 'Tarea no encontrada'})
        }
    },
     
    delete: async (req, res) => {
        const id = req.params.id
    
        if (id) {
            const taskDb = await Task.findByIdAndDelete({_id : id})
    
            if (taskDb) {
                res.json({
                    err: false,
                    message: 'Tarea eliminada'
                })
            } else {
                res.status(404).json({
                    err: true,
                    message: 'Tarea no encontrada'
                })
            }
        } else {
            res.status(404).json({
                err: true,
                message: 'Ingrese campo id'
            })
        }
    }
}


module.exports = cTask