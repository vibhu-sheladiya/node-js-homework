const mongoose = require("mongoose");
const musicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please add a name"],
    },
    artist_name: {
      type: String,
      required: [true, "Artist is Required"],
    },
    genre_name: {
      type: String,
      required: [true, "Genre Is Required"],
      trim: true,
      enum: ["Rock", "Pop", "Jazz", "Hip-Hop"],
      default: "Rock",
    },
    release_date: {
      type: Date,
      required: [true, "Release Date is Required"],
      default: null,
    },
    language: {
      type: String,
      trim: true,
      lowercase: true,
      uppercase: false,
    },
    albumName: {
      type: String,
    },
  },
  { timestamps: true }
);
const Music = mongoose.model('music', musicSchema);
module.exports = Music;
