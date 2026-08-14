import { useState } from "react";
import "./App.css";

import RecipesData from "./data/recipes.json";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AllRecipes from "./pages/AllRecipes.jsx";
import UpdateRecipeForm from "./components/UpdateRecipeForm.jsx";


import { Route, Routes } from "react-router-dom";

function App() {
  // Recipes state is now here so all components can access it
  const [recipes, setRecipes] = useState(RecipesData);

  // Delete a recipe
  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <>
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
            <Route
              path="/about"
              element={<AboutUs />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* All Recipes */}
            <Route
              path="/recipes"
              element={<AllRecipes recipes={recipes} />}
            />

            {/* Recipe Details */}
            <Route
              path="/recipes/:id"
              element={<RecipeDetails recipes={recipes} />}
            />

            {/* Update Recipe */}
            <Route
              path="/recipes/:id/edit"
              element={
                <UpdateRecipeForm
                  recipes={recipes}
                  setRecipes={setRecipes}
                />
              }
            />

            {/* Page Not Found */}
            <Route
              path="*"
              element={<PageNotFound />}
            />

          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;