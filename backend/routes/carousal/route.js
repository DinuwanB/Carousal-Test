const express = require("express");
const multer = require("multer");

const {
  getCarousalList,
  saveCarousal,
  imageUpload,
} = require("./carousal.controller");

var date = new Date().toISOString().replace(/:/g, '-');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const carousalRouter = express.Router();

carousalRouter.get("/", getCarousalList);
carousalRouter.post("/upload", upload.single("image"), imageUpload);
carousalRouter.post("/save", saveCarousal);

module.exports = carousalRouter;
