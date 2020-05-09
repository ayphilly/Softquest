var mongoose = require('mongoose')

var schema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true,
        
    },
    number : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true,        
    },
    need : {
        type: String,
    },    
    date: {
        type: Date,
        default: Date.now
    }
});

var Contact = mongoose.model('Contact', schema);

module.exports = Contact;