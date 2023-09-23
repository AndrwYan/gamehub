import {create} from 'zustand';

interface AuthStore {

    isLoggedIn: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;

}

export const useAuthStore = create<AuthStore>((set) => ({
  
    isLoggedIn: localStorage.getItem('token') !== null,
    token: localStorage.getItem('token'),
    
    login: (token) => {
      localStorage.setItem('token', token);
      set({ isLoggedIn: true, token });
    },    
    
    logout: () => {
      localStorage.removeItem('token');
      set({ isLoggedIn: false, token: null });
    },
  }));
