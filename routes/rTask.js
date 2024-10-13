
const express = require('express');
const router = express.Router();

const Task = require('../models/mTask')

const cTask = require('../controllers/cTask');

router.get('/', cTask.getAll);

router.get('/:id', cTask.getTask);

router.get('/byuser/:user', cTask.getTasksByUser);

router.put('/edit/:id', cTask.update)

router.post('/add', cTask.create)

router.delete('/remove/:id', cTask.delete);
module.exports = router;