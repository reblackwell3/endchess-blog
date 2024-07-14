const {getModel} = require('./model');

const getAllProjects = async () => {
    const Project = getModel();
    return await Project.find();
}

const createProject = async (projectData) => {
    const Project = getModel();
    const newProject = new Project(projectData);
    return await newProject.save();
}

module.exports = {
    getAllProjects,
    createProject,
};
