import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import RecipeList from "./components/RecipeList.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-layout">
        <Sidebar />
        <RecipeList />
      </div>

      <Footer />
    </>
  );
}

export default App;
