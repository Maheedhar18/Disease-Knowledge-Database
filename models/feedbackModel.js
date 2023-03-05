const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Name must be entered']
    },

    mail: {
        type: String,
        required: [true, 'Mail ID must be entered']
    },

    feed_back: {
        type: String,
        required: [true, 'Feedback must be entered']
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;