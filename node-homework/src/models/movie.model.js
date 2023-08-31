const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
  {
    movie_title: {
      type: String,
      required: [true, "movie title is required"],
      trim: true,
    },
    director_name: {
      type: String,
      trim: true,
    },
    release_date: {
      type: Date,
      default: Date.now(),
    },
    genre: {
      type: Array,
    },
    language: {
      type: String,
    },
    country: {
      type: Array,
    },
    rating: {
      type: Number,
      max: 9,
      min: 1,
    },
    music: {
      type: mongoose.Types.ObjectId,
      ref: "music",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
