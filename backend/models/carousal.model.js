const mongoose = require("mongoose");

const CarousalSchema = new mongoose.Schema({
  subtitle: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
});

const Carousal = mongoose.model("carousal", CarousalSchema);

module.exports = Carousal;
