
const express = require('express');
const router = express.Router();

const Task = require('../models/mTask')

const cTask = require('../controllers/cTask');

router.get('/', cTask.getAll);

// vista crear
router.get('/crear', (req, res) => {
    res.render('crear-task')
})

// vista edit
router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const taskDb = await Task.findOne({_id: id});
        res.render('edit-task', {
            task: taskDb,
            error: false
        })
    } catch (error) {
        console.log(error),
        res.render('edit-task', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.put('/edit/:id', cTask.update)

router.post('/crear', cTask.create)

module.exports = router;