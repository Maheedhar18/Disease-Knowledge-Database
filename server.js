const mongoose = require('mongoose');
const app = require('./app');

const dburl='mongodb+srv://<username>:<password>@cluster0.bndg37a.mongodb.net/<database>?retryWrites=true&w=majority'

async function connect(){
    try {
        await mongoose.connect(dburl);
        console.log("Connected to MongoDB");
    } catch(error){
        console.error(error);
    }
}

connect();

app.listen(3000, () =>{
    console.log("Server started on port 3000");
});