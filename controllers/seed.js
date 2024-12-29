const Car = require("../models/car.js");
// const cars = require('../local_data/carData.js')

seedData = async (req, res) => {
    try {
       await Car.insertMany(cars);
        res.status(201).send('Cars seeded successfully')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error seeding cars')
    }
}

  module.exports = {seedData}  