import React, { useState } from 'react';
import {
  Modal, Box, Button, TextField, Typography, Card, CardContent, CardMedia,
} from '@mui/material';
import { useMyContext } from '../../../context/Context';

function ChildModal({ open, handleClose, project, setProject, handleSave, errors }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="child-modal-title" variant="h6" mb={2}>
          {project.id ? 'Edit Project' : 'Add New Project'}
        </Typography>
        <TextField
          label="Project Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          variant="outlined"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          error={!!errors.description}
          helperText={errors.description}
        />
        <TextField
          label="Image URL"
          fullWidth
          margin="normal"
          variant="outlined"
          value={project.image}
          onChange={(e) => setProject({ ...project, image: e.target.value })}
          error={!!errors.image}
          helperText={errors.image}
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={handleClose} color="secondary" sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

function ProjectsEdit() {
  const { editProjects, setEditProjects } = useMyContext();

  const [projects, setProjects] = useState([
    { id: 1, name: 'Project One', description: 'Description of Project One', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Project Two', description: 'Description of Project Two', image: 'https://via.placeholder.com/150' },
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);
  const [errors, setErrors] = useState({ name: '', description: '', image: '' });

  const handleClose = () => setEditProjects(false);

  const handleEdit = (project) => {
    setEditingProject(project);
    setErrors({ name: '', description: '', image: '' });
    setIsChildModalOpen(true);
  };

  const handleAddNewProject = () => {
    setEditingProject({ name: '', description: '', image: '' });
    setErrors({ name: '', description: '', image: '' });
    setIsChildModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((proj) => proj.id !== id));
    }
  };

  const validate = () => {
    const newErrors = {
      name: editingProject.name.trim() ? '' : 'Project Name is required.',
      description: editingProject.description.trim() ? '' : 'Description is required.',
      image: editingProject.image.trim() ? '' : 'Image URL is required.',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSave = () => {
    if (!validate()) return;

    if (editingProject.id) {
      setProjects(projects.map((proj) => (proj.id === editingProject.id ? editingProject : proj)));
    } else {
      setProjects([
        ...projects,
        { ...editingProject, id: projects.length + 1 }, // Assign a new id
      ]);
    }
    setIsChildModalOpen(false);
    setEditingProject(null);
  };

  return (
    <div>
      <Modal open={editProjects} onClose={handleClose} aria-labelledby="projects-modal-title">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <Typography id="projects-modal-title" variant="h6" component="h2" mb={2}>
            Projects
          </Typography>

          {projects.map((project) => (
            <Card key={project.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  {project.description}
                </Typography>
                {project.image && (
                  <CardMedia component="img" height="140" image={project.image} alt={project.name} />
                )}
                <Box mt={1}>
                  <Button variant="outlined" color="primary" onClick={() => handleEdit(project)} sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(project.id)}>
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Button variant="contained" onClick={handleAddNewProject} sx={{ mt: 2 }} fullWidth>
            Add New Project
          </Button>

          {editingProject && (
            <ChildModal
              open={isChildModalOpen}
              handleClose={() => setIsChildModalOpen(false)}
              project={editingProject}
              setProject={setEditingProject}
              handleSave={handleSave}
              errors={errors}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ProjectsEdit;
