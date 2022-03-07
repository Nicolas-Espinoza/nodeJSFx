const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    pair: { type: String, required: true },
});

const request = mongoose.model('pair', requestSchema);
module.exports = request;