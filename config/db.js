const mongoose = require('mongoose')

require('dotenv').config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster1.m0ifpk2.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster1`;

const connectDB = async ( ) => {
    try {
        mongoose.connect(uri,
            {useNewUrlParser: true, useUnifiedTopology: true}
        ).then(() => console.log('base de datos conectada'))
            .catch(e => console.log(e))
    } catch (error) {
        console.error("Error de conexion a db", error);
        process.exit(1)
    }
}

module.exports = connectDB;