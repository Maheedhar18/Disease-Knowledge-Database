const mongoose = require('mongoose');

const diseasesSchema = new mongoose.Schema({
    sno: {
        type: Number,
        required: true,
    },
    scientific_name: {
        type: String,
        required: true,
    },
    disease_name:{
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    related_diseases: {
        type: String,
        required: true,
    },
});

const Diseases = mongoose.model("diseases", diseasesSchema);

module.exports = Diseases;
