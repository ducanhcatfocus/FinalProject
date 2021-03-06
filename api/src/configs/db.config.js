const mongoose = require("mongoose");

const connectDatabase = () => {
  // const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  const mongoDbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@project1.vwann.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
  console.log(`Connecting to ${mongoDbUrl}`);
  mongoose.Promise = global.Promise;
  // Connecting to the database
  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n${err}`);
      process.exit();
    });
};

module.exports = connectDatabase;
