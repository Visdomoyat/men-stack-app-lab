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
app.get('/', (req, res) => {
    res.render('home')
})

// create cars
app.get('/cars/new', (req, res) => {
    res.render('cars/new');
})

app.post('/cars', async (req, res) => {
    await Car.create(req.body);
    res.redirect('/cars'); // redirect to index cars
})

app.get('/cars', async (req, res) => {
    try {
const allCars = await Car.find({});
res.render('cars/index',{
    cars: allCars})
} catch(error) {
    console.error(error.message)
    res.status(500).send('internal server error')
}
})

//show cars
app.get('/cars/:id', async (req, res) => {
try{ 
    const foundCar = await Car.findById(req.params.id)
res.render('cars/show', {
    car: foundCar
})
} catch(error) {
    console.error(error.message)
    res.status(500).send(';internal server error')
}

});

// Delete cars
app.delete('/cars/:id', async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/cars')
})

// update cars === edit route

app.get('/cars/:id/edit', async (req, res) => {
    try {
        const foundCar = await Car.findById(req.params.id);
        res.render('cars/edit', {
            car: foundCar,
        });
        
    } catch(error) {
        console.error(error.message)
        res.status(500).send(';internal server error')
    }
    
})

app.put('/cars/:id', async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/cars/${req.params.id}`)
})


//**********************************
//             Listener
//***********************************
const PORT = 3033;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT} `)
})