const Car = require("../models/car.js");

exports.getCars = async (req, res) => {
    try {
        const allCars = await Car.find({});
        res.render('cars/index',{
            cars: allCars})
        } catch(error) {
            console.error(error.message)
            res.status(500).send('internal server error')
        }
        }

exports.newCar = (req, res) => {
    res.render('cars/new');
}
exports.createCar = async (req, res) => {
        await Car.create(req.body);
        res.redirect('/cars'); // redirect to index cars
    }
exports.deleteCar = async(req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/cars')
}
exports.updateCar = async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/cars/${req.params.id}`)
};

exports.editCar = async (req, res) => {
    try {
        const foundCar = await Car.findById(req.params.id);
        res.render('cars/edit', {
            car: foundCar,
        });
        
    } catch(error) {
        console.error(error.message)
        res.status(500).send(';internal server error')
    }
    
}
exports.getCar = async (req, res) => {
    try{ 
        const foundCar = await Car.findById(req.params.id)
    res.render('cars/show', {
        car: foundCar
    })
    } catch(error) {
        console.error(error.message)
        res.status(500).send(';internal server error')
    }
    
    }
