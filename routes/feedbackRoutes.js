const express = require('express');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

router
    .route('/')
    .get(feedbackController.display)
    .post(feedbackController.insert)


module.exports = router;