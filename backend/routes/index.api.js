const express = require('express');

const carousalRouter = require('./carousal/route');

const api = express.Router();

api.use('/carousal', carousalRouter);

module.exports = api;