import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Recipes</h2>

      {favorites.length === 0 && <p>No favorites added yet.</p>}

      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
