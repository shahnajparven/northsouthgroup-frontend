import { create } from "zustand";
import { createProject, deleteProjectApi, getAllProjects, getProjectById, updateProjectApi } from "./projectApi";

export const useProjectStore = create((set) => ({
  projects: [],
  project: null,
  isLoading: false,

  // Add a new project
  addProject: async (formData) => {
    set({ isLoading: true });
    try {
      const res = await await createProject(formData);
      // Update the store with the new project
      set((state) => ({
        projects: [...state.projects, res.data.data],
        isLoading: false,
      }));

      return res.data.data; // optional: return created project
    } catch (err) {
      console.error(err);
      set({ isLoading: false });
      throw err;
    }
  },

  loadProjects: async () => {
    set({ isLoading: true });

    try {
      const res = await getAllProjects();

      set({
        projects: Array.isArray(res?.data) ? res.data : [],
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to load projects", error);
      set({ projects: [], isLoading: false });
    }
  },

// Update project
  updateProject: async (id, formData) => {
    try {
      const { data } = await updateProjectApi(id, formData);

      // Update store: replace the updated project
      set((state) => ({
        projects: state.projects.map((proj) =>
          proj._id === id ? data : proj
        ),
      }));

      return data;
    } catch (err) {
      throw err;
    }
  },

   // Delete a project
  deleteProject: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deleteProjectApi(id);
      // Remove the deleted project from state
      set({ projects: get().projects.filter((p) => p._id !== id), isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  
   // Load single project by ID
  loadProjectDetails: async (id) => {
    set({ isLoading: true });
    try {
      const res = await getProjectById(id); // fetch from backend
      set({ projectDetails: res.data, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ isLoading: false, projectDetails: null });
    }
  },

  clearProjectDetails: () => set({ projectDetails: null }),

}));
