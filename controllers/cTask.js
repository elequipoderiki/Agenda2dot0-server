const Task = require('../models/mTask');

const cTask = {
    getAll: async (req, res) => {
    
        try {
            const arrayTaskDB = await Task.find()
            
            res.render('tasks', {
                arrayTasks: arrayTaskDB
    
            })
        
        } catch (error) {
            console.log(error)
        }
        
    },

    create: async(req, res) => {
        try {
            const body = req.body;
            await Task.create(body);
            res.redirect('/');
        } catch(error) {
            console.error(error);
        }
    },

    update: async (req, res) => {
    
        const id = req.params.id;
    
        const body = req.body
        try {
            const taskDb = await Task.findByIdAndUpdate(
                id, body, {useFindAndModify: false}
            )
    
            res.json({
                modificado: true,
                mensaje: 'editado'
            })
        } catch (error) {
            res.json({
                modificado: false,
                mensaje: 'falla'
            })
        }
    }
}


module.exports = cTask