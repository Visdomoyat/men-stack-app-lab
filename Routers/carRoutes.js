const express = require('express')
const router = express.Router();
const carsController = require('../controllers/carController');

// Routes
router.get('/cars', carsController.getCars)
router.get('/cars/new', carsController.newCar)
router.post('/cars', carsController.createCar)
router.delete('/cars/:id', carsController.deleteCar)
router.put('/cars/:id', carsController.updateCar)
router.get('/cars/:id/edit', carsController.editCar)
router.get('/cars/:id', carsController.getCar)


module.exports = router