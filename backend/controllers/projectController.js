const Project = require('../models/Project');

// Créer un nouveau projet
const createProject = async (req, res) => {
    const { title, image, description, githubLink, url } = req.body;

    try {
        const newProject = new Project({
            title,
            image,
            description,
            githubLink,
            url
        });

        await newProject.save();
        res.status(201).json({ message: 'Projet créé avec succès', project: newProject });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Lire tous les projets
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Lire un projet par son ID
const getProjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Projet non trouvé' });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un projet par son ID
const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, image, description, githubLink, url } = req.body;

    try {
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { title, image, description, githubLink, url },
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).json({ message: 'Projet non trouvé' });
        }
        res.status(200).json({ message: 'Projet mis à jour avec succès', project: updatedProject });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Supprimer un projet par son ID
const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Projet non trouvé' });
        }
        res.status(200).json({ message: 'Projet supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};
