////////////////
/// DEPENDENCIES
////////////////
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurants.js')
const jwt = require('jsonwebtoken') // Token for later

// ANDY Auth Middleware
const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (!token) {
            return res.status(401).json({msg: "No token"})
        }
        token = token.split(' ')[1]
        const verified = jwt.verify(token, process.env.jwtSECRET)
        if (!verified) {
            return res.status(401).json({msg: "Not verified"})
        }
        // console.log(verified)
        req.user = verified
        next();
    }   
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

////////////////
/// ROUTES
////////////////

////Create Route////
router.post('/', auth, async (req, res) => {
    try {
        const newRestaurant = {...req.body, username: req.user.username}
        // console.log(newRestaurant)
        const createdRestaurant = await Restaurant.create(newRestaurant)
        res.status(200).json(createdRestaurant)
    } catch(error) {
        res.status(400).json(error)
    }
})

////Read Route////
router.get('/', auth, async (req, res) => {
    try {
        const restaurants = await Restaurant.find({username: req.user.username})
        res.status(200).json(restaurants)
    } catch(error){
        res.status(400).json(error)
    }
})

////Delete Route////
router.delete('/:id', auth, async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedRestaurant)
    } catch(error) {
        res.status(400).json(error)
    }
})

////Update Route////
router.put('/:id', auth, async (req, res) => {
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