import RecipeItem from "./RecipeItem";
import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

const RecipeList = ({ recipes, onDelete }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>

      <ul>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onDelete={onDelete}
            toggleFavorite={toggleFavorite}
            isFav={favorites.some((favorite) => favorite.id === recipe.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
