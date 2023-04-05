const mongoose = require('mongoose');

const symptomsSchema = new mongoose.Schema({
    Disease : {
        type : String
    },
    Symptoms : {
        type : String
    },
    AffectedOrgan : {
        type : String
    }
});

const Symptom = new mongoose.model('symptoms', symptomsSchema);
module.exports = Symptom;