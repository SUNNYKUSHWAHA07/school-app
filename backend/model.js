const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,  
    },
    image:{
        type: String,
    },
    contentType:{
        type: String,
    },
    name:{
        type: String,
    },
    address:{
        type:String,
    },
    city:{
        type: String,
    }
})

module.exports = mongoose.model('School', schoolSchema);