const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const carData = require('./data/carData');
const app = express();
const path =require('path');
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// environment variable
dotenv.config()

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI);
//log connection status to terminal on start
mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}.`);
})
//**********************************
//           Database
//***********************************
// Import the Car model
const Car = require("./models/car.js")

//**********************************
//             middleware
//***********************************
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))

//**********************************
//              ROUTES {I.N.D.U.C.E}
//***********************************
//index

const carRoutes = require('./Routers/carRoutes')
app.use('/', carRoutes )

app.use('/', require('./Routers/home'))

app.use('/', require('./Routers/seed'))


//**********************************
//             Listener
//***********************************
const PORT = 3033;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT} `)
})