const Project = require('./model');

const getAllProjects = async () => {
    return await Project.find();
}

const createProject = async (projectData) => {
    const newProject = new Project(projectData);
    return await newProject.save();
}

module.exports = {
    getAllProjects,
    createProject,
};
