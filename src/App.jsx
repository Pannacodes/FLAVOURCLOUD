import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import RecipeList from "./components/RecipeList.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AllRecipes from "./pages/AllRecipes.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-layout">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />

            <Route path="/about" element={<AboutUs />} />

            <Route path="/contact" element={<Contact />} />
            
            <Route path="/recipes" element={<AllRecipes />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
