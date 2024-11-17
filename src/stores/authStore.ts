import { create } from 'zustand';

type AuthStore = {
  isModalOpen: boolean;
  modalType: 'login' | 'register';
  openModal: (type: 'login' | 'register') => void;
  closeModal: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isModalOpen: false,
  modalType: 'login',
  openModal: (type) => set({ isModalOpen: true, modalType: type }),
  closeModal: () => set({ isModalOpen: false }),
}));