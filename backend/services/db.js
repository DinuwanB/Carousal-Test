const { default: mongoose } = require("mongoose");

module.exports = async function dbConnect(uri) {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = await mongoose.connection;

    connection.once("open", () => {
      console.log("Mongo Atlas Connected Successfully");
    });
  } catch (error) {
    console.log("Databse connect Fail");
  }
};
