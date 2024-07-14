const projectService = require('./service');

const getProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

const createProject = async (req, res) => {
    const { name, description, icon, url } = req.body;
    try {
        const newProject = await projectService.createProject({ name, description, icon, url });
        res.status(201).json(newProject);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

module.exports = { getProjects, createProject };
