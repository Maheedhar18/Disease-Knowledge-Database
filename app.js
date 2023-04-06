const express = require('express');
const path = require('path');
const feedbackRouter = require('./routes/feedbackRoutes');
const Diseases = require('./models/diseasesModel');
const Drugs = require('./models/DrugInformationsModel');
const generalinformations = require('./models/generalinformationsModel');
const GeneInformations = require('./models/GeneInformationsModel');
const Symptom = require('./models/symptomsModel');
const clinicaltrials =  require('./models/clinicaltrialsModel');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/', function(req, res) {
    res.render('index');
});


app.use('/contact', feedbackRouter);

app.get('/diseases', async function(req, res) {
    const diseases = await Diseases.find({});
    res.render('diseases', {diseases : diseases});
});

app.get('/diseases/:id', async function(req, res) {
    const diseaseId = req.params.id;
    const diseases = await Diseases.findOne({_id : diseaseId});
    const name = diseases.disease_name;
    const disease = await generalinformations.findOne({Disease : name});
    const symptom = await Symptom.findOne({Disease : name});
    res.render('disease', {diseases: diseases, disease : disease , symptom : symptom});
});

app.get('/drugs', async function(req, res) {
    const drugs = await Drugs.find({});
    res.render('drugs', {drugs : drugs});
});

app.get('/genes', async function(req, res){
    const genes = await GeneInformations.find({});
    res.render('genesall', {genes : genes});
});

app.get('/genes/:id', async function(req, res){
    const diseaseId = req.params.id;
    const diseases = await Diseases.findOne({_id : diseaseId});
    const name = diseases.disease_name.toLowerCase();
    const genes = await GeneInformations.find({Disease : name});
    res.render('genesingle', {genes : genes});
});

app.get('/clinicaltrials', async function(req, res){
    const trials = await clinicaltrials.find({});
    res.render('ctrials', {trials : trials}); 
});

app.get('/clinicaltrials/:id', async function(req, res){
    const drugId = req.params.id;
    const drug = await Drugs.findOne({_id : drugId});
    const name = drug.Name;
    const trials = await clinicaltrials.find({Drug : name});
    if (trials[0])
    {
        res.render('ctrialsingle', {trials : trials});
    }
    else
    {
        res.render('noclinicaltrials', {drug : drug});
    }
    
});

module.exports = app;