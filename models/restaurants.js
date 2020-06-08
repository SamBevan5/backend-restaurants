const {Schema, model} = require('mongoose')

const restaurantSchema = new Schema({
  RestaurantL3: {
    id: Number,
    name: String,
    url: String,
    location: {
      address: String,
      locality: String,
      city: String,
      zipcode: Number,
      }
  },
  Photo: {
    id: String, //ID of the photo
    url: String, //URL of the image file
    thumb_url: String //URL for 200 X 200 thumb image file
    }
})

const Restaurant = model('restaurant', restaurantSchema)

module.exports = Restaurant