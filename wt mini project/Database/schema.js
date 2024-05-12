const mongoose = require('mongoose');

const dghSchema = new mongoose.Schema({
    Name: String,
    email: String,
    item: String,
});
module.exports.Books = mongoose.model("DGH",dghSchema);

