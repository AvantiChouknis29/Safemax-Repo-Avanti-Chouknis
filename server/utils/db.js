const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI, { family: 4 });  // Optional to specify useNewUrlParser or useUnifiedTopology
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;  // Rethrow error to be caught by startServer
  }
};

module.exports = connectDb;
