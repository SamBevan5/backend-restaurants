////////////////
/// DEPENDENCIES
////////////////
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurants.js')
//const jwt = require('jsonwebtoken') // Token for later

////////////////
/// ROUTES
////////////////

////Create Route////
router.post('/', async (req, res) => {
    try {
        const createdRestaurant = await Restaurant.create(req.body)
        res.status(200).json(createdRestaurant)
    } catch(error) {
        res.status(400).json(error)
    }
})

////Read Route////
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({})
        res.status(200).json(restaurants)
    } catch(error){
        res.status(400).json(error)
    }
})

////Delete Route////
router.delete('/:id', async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedRestaurant)
    } catch(error) {
        res.status(400).json(error)
    }
})

////Update Route////
router.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.status(200).json(updatedRestaurant)
    } catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router