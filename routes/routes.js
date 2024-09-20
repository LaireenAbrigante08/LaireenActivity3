const express = require('express');
const routes = express.Router();
const KingController = require('../controller/KingController');
routes.get('/', KingController.index);

module.exports = routes;