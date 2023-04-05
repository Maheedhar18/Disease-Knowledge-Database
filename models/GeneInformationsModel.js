const mongoose = require('mongoose');

const GeneSchema = new mongoose.Schema({
        
    Symbol : {
        type : String
    },

    Description : {
        type : String
    },

    Category : {
        type : String
    }
})

const GeneInformationsSchema = new mongoose.Schema({
    Disease : {
        type: String
    },

    Gene : GeneSchema

});

const GeneInformations = mongoose.model('GeneInformations', GeneInformationsSchema);

module.exports = GeneInformations;