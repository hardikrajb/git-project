const mongoose = require('mongoose')

module.exports.connectdb = ()=>{
    return mongoose.connect('mongodb+srv://hardikrajb03:20-Sep-2003@cluster0.hyif4gm.mongodb.net/');
}