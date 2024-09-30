const express = require('express')

const router = express.Router();

const Mascota = require('../models/mascota')

const cMascota = require('../controllers/cMascota')

router.get('/', cMascota.getAll);

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', cMascota.create);

router.get('/:id', async (req, res) => {
    
    const id = req.params.id
    try {
        const mascotaDb = await Mascota.findOne({_id:id})
        res.render('detalle', {
            mascota: mascotaDb,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })

    }
})

router.delete('/:id', cMascota.delete);

router.put('/:id', cMascota.update);

module.exports = router