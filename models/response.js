var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var responseSchema = new Schema({
    date: Date,
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Response', responseSchema);