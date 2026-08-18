import { useState } from "react";
import "./App.css";

import RecipesData from "./data/recipes.json";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AllRecipes from "./pages/AllRecipes.jsx";
import UpdateRecipeForm from "./components/UpdateRecipeForm.jsx";
import AddRecipeForm from "./components/RecipeForm.jsx";
import Categories from "./pages/Categories.jsx";
import Favorites from "./pages/Favorites.jsx";
import { FavoritesProvider } from "./components/FavoriteContext.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  // Recipes state is now here so all components can access it
  const [recipes, setRecipes] = useState(RecipesData);

  // Delete a recipe
  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <FavoritesProvider>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main>
          <Routes>
            {/* Dashboard / Home */}
            <Route
              path="/"
              element={
                <Home
                  recipes={recipes}
                  onDelete={handleDelete}
                  setRecipes={setRecipes}
                />
              }
            />

            {/* About */}
            <Route path="/about" element={<AboutUs />} />

            <Route
              path="/categories"
              element={<Categories recipes={recipes} />}
            />

            {/* All Recipes */}
            <Route path="/recipes" element={<AllRecipes recipes={recipes} />} />

            {/* Recipe Details */}
            <Route
              path="/recipes/:id"
              element={<RecipeDetails recipes={recipes} />}
            />

            {/* Update Recipe */}
            <Route
              path="/recipes/:id/edit"
              element={
                <UpdateRecipeForm recipes={recipes} setRecipes={setRecipes} />
              }
            />

            {/**add recipe form from side bar */}
            <Route
              path="/recipes/add"
              element={<AddRecipeForm recipes={recipes} setRecipes={setRecipes} />}
            />

            <Route path="/favorites" element={<Favorites />} />

            {/* Page Not Found */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
      

      <Footer />
    </FavoritesProvider>
  );
}

export default App;
