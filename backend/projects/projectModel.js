const mongoose = require('mongoose');

const projectSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: Buffer,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

const project = mongoose.model('project', projectSchema);

module.exports = project;