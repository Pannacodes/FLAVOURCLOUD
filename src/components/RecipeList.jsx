import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, onDelete }) => {
  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>

      <ul>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;