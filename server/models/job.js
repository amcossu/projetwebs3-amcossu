var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
    job: String,
    company: String,
    offer_description: String,
    offer_code: String,
    contact: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);