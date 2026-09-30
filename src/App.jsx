import MenuItem from "./components/MenuItem";
import menuItems from "./menuData";
import { useState } from "react";
function App() {
  const[searchTerm,setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const[selectedCategory,setSelectedCategory]=useState("All");
  const filteredItems = menuItems.filter((item) => {
  const matchesCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  const matchesSearch =
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});
  return (
    <div className={darkMode ? "dark-mode min-vh-100 py-5" : "light-mode min-vh-100 py-5"}>
    <div className="container">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
  <h1 className="mb-0">
    Digital Menu
  </h1>

  <button
    className="mode-toggle"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀️" : "🌙"}
  </button>
</div>
     <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
      <button 
      className="btn btn-outline-primary m-2"
      onClick={()=> setSelectedCategory("All")}
      >
        All
      </button>
      <button 
      className="btn btn-outline-primary m-2"
      onClick={()=> setSelectedCategory("Food")}
      >
        Food
      </button>
      <button 
      className="btn btn-outline-primary m-2"
      onClick={()=> setSelectedCategory("Drinks")}
      >
        Drinks
      </button>
      <button 
      className="btn btn-outline-primary m-2"
      onClick={()=> setSelectedCategory("Desserts")}
      >
        Desserts
      </button>
     </div>
     <div className="search-container mb-4">
      <input
      className="search-input"
  type="text"
  placeholder="Search menu..."
  onChange={(event)=> setSearchTerm(event.target.value)}
/>
</div>
      <div className="row g-4">

        {filteredItems.map((item) => (
          <div className="col-md-4" key={item.id}>

            <MenuItem
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
            />

          </div>
        ))}

      </div>
    </div>
    </div>
  );
}

export default App;