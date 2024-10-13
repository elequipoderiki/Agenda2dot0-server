const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { getUserByEmail } = require('../controllers/cUser');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    nombre: String,
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', taskSchema);

const mUser = {
    create: async (body) => {

        bodyPassword = body.password
        hashed = bcrypt.hashSync(bodyPassword, 1)
        // Store the hash in your database
        try {
            await User.create({nombre: body.nombre, email: body.email, password: hashed});
                    
        } catch (err) {
            throw {message: err.message}
        }            
    },

    checkUserPassword: async (email, plainPassword) => {
        try {
            const userDb = await User.findOne({email:email})
            hash = userDb.password
            if (bcrypt.compareSync(plainPassword, hash)) {
                return true
            } else {
                return false
            }

        } catch(err) {
            throw {message: err.message + `. Tal vez usuario no encontrado con este email ${email}`}
        }

    } , 

    getUserByEmail: async (email) => {
        try {
            const userDb = await User.findOne({email: email})
            if (userDb)
                return userDb
            else 
                throw {message: ''}
            } catch(err) {
                throw {message: err.message + '. Usuario no encontrado'}
            }

    } , 


}

module.exports = mUser