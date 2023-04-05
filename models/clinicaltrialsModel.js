const mongoose = require('mongoose');

const clinicaltrialsSchema = new mongoose.Schema({
    Drug : {
        type : String
    },
    Phase : {
        type : String
    },
    Status : {
        type : String
    },
    Purpose : {
        type : String
    },
    Conditions : {
        type : String
    },
    Count : {
        type :String
    }
});

const clinicaltrials = new mongoose.model('clinicaltrials', clinicaltrialsSchema);
module.exports = clinicaltrials;