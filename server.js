////////////////
/// DEPENDENCIES
////////////////

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

////////////////
/// GLOBALS
////////////////
const PORT = process.env.PORT || 3000
const restaurantsController = require('./controllers/restaurants.js')
const db = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'

// //Felt important. Might delete later...
// const whitelist = [
//     'http:localhost:1985'
// ]

// //Object to Configure CORS middleware
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf (origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

////////////////
/// DATABASE CONNECT
////////////////
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
db.on('open', ()=> {
    console.log('Mongo is Connected')
})

////////////////
/// MIDDLEWARE
////////////////
app.use(cors())  //May add in corsOptions here later
app.use(express.json())
app.use('/restaurants/', restaurantsController)

////////////////
/// LISTENER
////////////////
app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
})