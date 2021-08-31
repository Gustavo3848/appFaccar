const mongoose = require('mongoose');

const NotaSchema = new mongoose.Schema({
    period :{
        type:String
    } ,
    result : {
        type: Number
    },
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'materias'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
});

module.exports = mongoose.model('notas', NotaSchema);