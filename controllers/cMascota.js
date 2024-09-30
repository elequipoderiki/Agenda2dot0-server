const Mascota = require('../models/mascota')

const cMascota = {
    getAll: async (req, res) => {
    
        try {
            const arrayMascotasDB = await Mascota.find()
            
            res.render('mascotas', {
                arrayMascotas: arrayMascotasDB
    
            })
        
        } catch (error) {
            console.log(error)
        }
        
    },

    create: async(req, res) => {
        const body = req.body;
        try {
            // const mascotaDb = new Mascota(body)
            // await mascotaDb.save()
            await Mascota.create(body)
    
            res.redirect('/mascotas')
        } catch (error) {
            console.log(error)
        }
    },
     
    update: async (req, res) => {
    
        const id = req.params.id;
    
        const body = req.body
        try {
            const mascotaDb = await Mascota.findByIdAndUpdate(
                id, body, {useFindAndModify: false}
            )
    
            res.json({
                estado: true,
                mensaje: 'editado'
            })
        } catch (error) {
            res.json({
                estado: false,
                mensaje: 'falla'
            })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
    
        try {
            const mascotaDb = await Mascota.findByIdAndDelete({_id : id})
    
            if (mascotaDb) {
                res.json({
                    estado: true,
                    mensaje: 'eliminado'
                })
            } else {
                res.json({
                    estado: false,
                    mensaje: 'falló eliminar'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = cMascota