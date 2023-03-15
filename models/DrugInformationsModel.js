const mongoose = require('mongoose');

const DrugInformationsSchema = new mongoose.Schema({
    Name : {
        type : String
    },
    Weight : {
        type : String
    },
    Description : {
        type : String
    },
    Categories : {
        type : String
    }
});

const Drugs = mongoose.model("DrugInformation" , DrugInformationsSchema);
module.exports = Drugs;