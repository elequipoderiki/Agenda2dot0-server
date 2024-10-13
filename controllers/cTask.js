const mTask = require('../models/mTask');

const cTask = {
    getAll: async (req, res) => {

        try {
            const tasks = await mTask.getAll()
            
            res.json({tasks})
        
        } catch (error) {
            console.error(error)
        }
        
    },

    create: async(req, res) => {
        const body = req.body;
        if(body) {
            try {
                await mTask.create(body);
                res.json({error: false, message: 'Tarea agregada'})
            } catch (err) {
                // el servidor es incapaz de operar con el body actual (internal server error)
                res.status(500).json({error:true, message: err.message})
            }

        } else {
            // falta el body (bad request)
            res.status(400).json({error:true, message: 'Falló crear tarea'})
        }
    },

    getTask: async (req, res) => {
        const id = req.params.id;
    
        if (id) {
            try {
                const taskDb = await mTask.getTask(id)
                res.json(taskDb)
            } catch (err) {
                // recurso no encontrado con este id (resource not found)
                res.status(404).json({
                    error: true,
                    message: err.message
                })
            }
        } else {
            // falta el id (bad request)
            res.status(400).json({error: true, message: 'Ingrese campo Id'})
        }

    },

    getTasksByUser: async (req, res) => {
        const user = req.params.user
    
        if (user) {
            try {
                const taskDb = await mTask.getTasksByUser(user)
                res.json(taskDb)
            } catch (err) {
                // recurso no encontrado para este usuario (resource not found)
                res.status(404).json({
                    error: true,
                    message: err.message
                })
            }
        } else {
            // falta el usuario (bad request)
            res.status(400).json({error: true, message: 'Ingrese campo user'})
        }

    },

    update: async (req, res) => {
    
        const id = req.params.id;
    
        if (id) {
            try {
                const body = req.body
                const taskDb = await mTask.update(id, body)
        
                res.json({
                    error: false,
                    message: 'Tarea editada'
                })
            } catch (err) {
                // el servidor es incapaz de operar con el id y body actual (internal server error)
                res.status(500).json({error:true, message: err.message})
            }
        } else {
            // falta el id (bad request)
            res.status(400).json({error: true, message: 'Tarea no encontrada'})
        }
    },
     
    delete: async (req, res) => {
        const id = req.params.id
    
        if (id) {
            try {
                await mTask.delete(id)
        
                res.json({
                    error: false,
                    message: 'Tarea eliminada'
                })
            
            } catch(err) {
                // recurso no encontrado con ese id (resource not found)
                res.status(404).json({
                    error: true,
                    message: err.message
                })
            }
        } else {
            // falta campo id (bad request)
            res.status(400).json({
                error: true,
                message: 'Ingrese campo id'
            })
        }
    }
}


module.exports = cTask