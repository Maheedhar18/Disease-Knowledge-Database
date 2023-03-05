const Feedback = require('./../models/feedbackModel');

exports.display = (req, res) => {
    res.render('contact');
};

exports.insert = async (req, res) => {

    const newFeedback = await Feedback.create(req.body);
    res.redirect('contact');

};

