////////////////
/// DEPENDENCIES
////////////////

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

////////////////
/// GLOBALS
////////////////
const PORT = process.env.PORT || 3000
const restaurantsController = require('./controllers/restaurants.js')
const usersController = require('./controllers/users.js')
const db = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'

// //Felt important. Might delete later...
const whitelist = [
    'http:localhost:1985'
]

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
app.use('/users/', usersController)


app.post('/login', async (req, res) => {
    User.findOne({ username: req.body.username}, (error, foundUser) => {
        console.log(foundUser.username)
        if(error) {
            res.status(400).send('DB has a problem')
        } else if (!foundUser) {
            res.status(400).send('User not found')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                const token = jwt.sign(foundUser.username, 'secret')
                res.status(200).json(token)
            } else {
                res.status(400).send('Password does not match')
            }
        }
    })
})

////Reroute from root to /restaurants
app.get('/', (req, res) => {
    res.redirect('/restaurants')
})

////////////////
/// LISTENER
////////////////
app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
})