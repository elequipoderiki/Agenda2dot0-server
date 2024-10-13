const mUser = require('../models/mUser');

const cUser = {
    create: async(req, res) => {
        const body = req.body;
        if(body) {
            try {
                await mUser.create(body);
                res.json({error: false, message: 'usuario agregado'})
            } catch (err) {
                // el servidor es incapaz de operar con el body actual (internal server error)
                res.status(500).json({error:true, message: err.message})
            }

        } else {
            // falta el body (bad request)
            res.status(400).json({error:true, message: 'Falló crear usuario'})
        }
    },
    checkUserPassword: async (req, res) => {
        const email = req.body.email;
        const plainPassword = req.body.password
        if (email && plainPassword) {
            try {
                const isValid = await mUser.checkUserPassword(email, plainPassword)
                res.json({isValid: isValid})

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

    getUserByEmail: async (req, res) => {
        const email = req.params.email;
    
        if (email) {
            try {
                const userDb = await mUser.getUserByEmail(email)
                res.json(userDb)
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
}

module.exports = cUser;
