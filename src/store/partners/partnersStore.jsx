import { create } from "zustand";
import {  createPartners, deletePartnersApi, getAllPartners, updatePartnersApi } from "./partnersApi";

export const usePartnerStore = create((set) => ({
  partners: [],
  partner: null,
  isLoading: false,

  // Add a new partners
  addPartners: async (formData) => {
    set({ isLoading: true });
    try {
      const res = await await createPartners(formData);
      // Update the store with the partners
      set((state) => ({
        partners: [...state.partners, res.data.data],
        isLoading: false,
      }));

      return res.data.data; // optional: return created newsEvents
    } catch (err) {
      console.error(err);
      set({ isLoading: false });
      throw err;
    }
  },

  loadPartners: async () => {
    set({ isLoading: true });

    try {
      const res = await getAllPartners();

      set({
        partners: Array.isArray(res?.data) ? res.data : [],
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to load partners", error);
      set({ partners: [], isLoading: false });
    }
  },

// Update partners
  updatePartners: async (id, formData) => {
    try {
      const { data } = await updatePartnersApi(id, formData);

      // Update store: replace the updated partners
      set((state) => ({
        partners: state.partners.map((proj) =>
          proj._id === id ? data : proj
        ),
      }));

      return data;
    } catch (err) {
      throw err;
    }
  },

   // Delete a partners
  deletePartners: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deletePartnersApi(id);
      // Remove the deleted partners from state
      set({ partners: get().partners.filter((p) => p._id !== id), isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  
   clearError: () => set({ error: null }),
      clearMessage: () => set({ message: "" }),
}));
