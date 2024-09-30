const express =  require('express')

const routesMascotas = require('./routes/rMascota')
const routesTasks = require('./routes/rTask');
const connectDB = require('./config/db');

const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('dotenv').config();

connectDB();
const port =  process.env.PORT || 3001;

// configuracion de vista 
app.set('view engine', 'ejs')
app.set('views' , __dirname +'/views')
// --------------

app.use(express.static(__dirname + "/public"))

// app.use('/', require('./routes/rutas-web'))

app.use('/', routesTasks);

app.use('/mascotas',routesMascotas);


app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log('servidor andando en puerto', port)
})