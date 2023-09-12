const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  }, {
    timestamps: true
  });
  

const gameSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    releaseYear: Number,
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)