const express =  require('express')
const errorController = require('./controllers/cError')
const routesTasks = require('./routes/rTask');
const connectDB = require('./config/db');

const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('dotenv').config();

connectDB();
const port =  process.env.PORT || 3001;
app.set('port', port)
app.use(cors());

app.use('/tasks', routesTasks);

app.use(errorController)


app.listen(port, () => {
    console.log('servidor andando en puerto', port)
})