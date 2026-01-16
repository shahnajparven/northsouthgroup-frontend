import { create } from "zustand";
import { createIndustrialCity, deleteIndustrialCityApi, getIndustrialCity, updateIndustrialCityApi } from "./industrialCityApi";

export const useIndustrialCityStore = create((set, get) => ({
  industrialCities: [],
  industrialCity: null,
  isLoading: false,
  error: null,

  // Add a new IndustrialCity
  addIndustrialCity: async (formData) => {
    set({ isLoading: true });
    try {
      const res = await createIndustrialCity(formData); // removed double await
      set((state) => ({
        industrialCities: [...state.industrialCities, res.data.data],
        isLoading: false,
      }));
      return res.data.data;
    } catch (err) {
      console.error(err);
      set({ isLoading: false });
      throw err;
    }
  },

  // Load all industrialCities
  loadIndustrialCity: async () => {
    set({ isLoading: true });
    try {
      const res = await getIndustrialCity();
      set({
        industrialCity: Array.isArray(res?.data) ? res.data : [],
        isLoading: false,
      });
    } catch (err) {
      console.error("Failed to load industrial", err);
      set({ industrialCities: [], isLoading: false });
    }
  },

  // Update IndustrialCity
  updateIndustrialCity: async (id, formData) => {
    try {
      const { data } = await updateIndustrialCityApi(id, formData);
      set((state) => ({
        industrialCities: state.industrialCities.map((proj) =>
          proj._id === id ? data : proj
        ),
      }));
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Delete IndustrialCity
  deleteIndustrialCity: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deleteIndustrialCityApi(id);
      set({
        industrialCities: get().industrialCities.filter((p) => p._id !== id),
        isLoading: false,
      });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
