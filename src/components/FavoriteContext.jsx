import { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    return saved;
  });

  const toggleFavorite = (recipe) => {
    let updated;

    if (favorites.some((fav) => fav.id === recipe.id)) {
      updated = favorites.filter((fav) => fav.id !== recipe.id);
    } else {
      updated = [...favorites, recipe];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
