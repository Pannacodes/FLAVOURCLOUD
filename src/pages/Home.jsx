import AddRecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";
import { useState } from "react";

const Home = ({ recipes, onDelete, setRecipes }) => {
const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard">
      <h1>FlavourCloud</h1>

      <button
        className="toggle-form-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "− Hide Add Recipe Form" : "+ Add Recipe"}
      </button>

      {showForm && (
        <AddRecipeForm
          recipes={recipes}
          setRecipes={setRecipes}
        />
      )}


      <RecipeList
        recipes={recipes}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Home;