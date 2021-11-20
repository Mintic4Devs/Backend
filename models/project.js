let mongoose = require('mongoose');



// SCHEMA
const Project = mongoose.model('Project', {
    name: {
        type: String,
        required:true
    }, 
    fase: {
        type:String,
        required:true
    },
    estado: {
        type:String,
        required:true
    }
});



module.exports = {Project}