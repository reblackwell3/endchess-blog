const express = require('express');
const { getProjects, createProject } = require('./controller');

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);

module.exports = router;
