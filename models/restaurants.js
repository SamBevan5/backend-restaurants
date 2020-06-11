const {Schema, model} = require('mongoose')

const restaurantSchema = new Schema({
  id: Number,
  name: String,
  url: String,
})

const Restaurant = model('restaurant', restaurantSchema)

module.exports = Restaurant