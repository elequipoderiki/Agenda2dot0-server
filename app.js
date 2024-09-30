const express =  require('express')

const routesTasks = require('./routes/rTask');
const connectDB = require('./config/db');

const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('dotenv').config();

connectDB();
const port =  process.env.PORT || 3001;

app.use(express.static(__dirname + "/public"))

app.use('/tasks', routesTasks);

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log('servidor andando en puerto', port)
})