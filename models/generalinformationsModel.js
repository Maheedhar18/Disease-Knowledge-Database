const mongoose = require('mongoose');

const generalinformationsSchema = new mongoose.Schema({
    Disease: {
        type: String
    },
    Speciality: {
        type: String
    },
    Causes: {
        type: String
    },
    Complications: {
        type: String
    },
    Types: {
        type: String
    },
    Prognosis: {
        type: String
    },
    Duration: {
        type: String
    },
    Prevention: {
        type: String,
    },
    Treatment:{
        type: String,
    },
    Medication: {
        type: String,
    },
    Frequency: {
        type: String,
    },
    Deaths: {
        type: String
    }
});

const generalinformations = mongoose.model("generalinformations", generalinformationsSchema);

module.exports = generalinformations;
