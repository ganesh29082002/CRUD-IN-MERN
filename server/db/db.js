const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = async () => {
  if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables");
    process.exit(1);
  }
 

  try {
    await mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.MONGO_PORT}/${process.env.DATABASE}`);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Database connection failed. Exiting now...", error.message);
    process.exit(1);
  }
};
