const Carousal = require("../../models/carousal.model");

async function getCarousalList(req, res) {
  try {
    let slidesCount = parseInt(req.query.slides) || 1;

    if (slidesCount < 10) {
      const response = await Carousal.find({}).limit(slidesCount);
      res.status(200).json(response);
    } else {
      res.status(400).json({ msg: "Please enter below 10" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function imageUpload(req, res) {
  try {
    console.log(req.file)
    if (req.file?.filename == null || req.file?.filename == "undefined") {
      res.status(400).json("No File");
    } else {
      var filePath =
        "http://localhost:3006/image/" + req.file.filename;

      res.status(200).json(filePath);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function saveCarousal(req, res) {
  try {
    var newCarousalObject = new Carousal(req.body);
    const response = await Carousal.create(newCarousalObject);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getCarousalList,
  imageUpload,
  saveCarousal,
};
