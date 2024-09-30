
const express = require('express');
const router = express.Router();

const Task = require('../models/mTask')

const cTask = require('../controllers/cTask');

router.get('/', cTask.getAll);

router.put('/edit/:id', cTask.update)

router.post('/add', cTask.create)

router.delete('/remove/:id', cTask.delete);
module.exports = router;