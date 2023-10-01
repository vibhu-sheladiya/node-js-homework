const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net/blog?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database Connected successfully");
  } catch (err) {
    console.log("=====err=====", err);
  }
};

module.exports = { dbConnection };