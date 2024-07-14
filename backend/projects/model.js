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

const conn = mongoose.createConnection('mongodb://localhost:27017/projectdb');
conn.on('connected', () => console.log('Project db connected'));
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;