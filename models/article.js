const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required:true},
    date: {type: String, required:true},
    tags:[],
    content: String,
    picUrl: String
});

module.exports = mongoose.model('article', articleSchema);