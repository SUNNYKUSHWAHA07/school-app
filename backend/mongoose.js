const mongoose = require('mongoose');

function mongodbConnect(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err=>{console.log("Error connecting to MongoDB"); process.exit(1);})
} 

 module.exports = mongodbConnect;