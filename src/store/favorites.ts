import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      addFavorite: (id: string) => {
        set((state) => ({
          favorites: state.favorites.includes(id) 
            ? state.favorites 
            : [...state.favorites, id]
        }));
      },
      
      removeFavorite: (id: string) => {
        set((state) => ({
          favorites: state.favorites.filter((favId) => favId !== id)
        }));
      },
      
      toggleFavorite: (id: string) => {
        const { favorites } = get();
        if (favorites.includes(id)) {
          set({ favorites: favorites.filter((favId) => favId !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
      
      isFavorite: (id: string) => {
        return get().favorites.includes(id);
      },
      
      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: 'bag-favorites',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
