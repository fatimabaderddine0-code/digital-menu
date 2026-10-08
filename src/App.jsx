import MenuItem from "./components/MenuItem";
import { useEffect, useState } from "react";
import "./App.css";
import { FaBars } from "react-icons/fa";

import {
  FaMoon,
  FaSun,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    let url = "https://digital-menu-backend-731h.onrender.com/api/items";
    const params = [];

    if (search) {
      params.push(`search=${search}`);
    }

    if (selectedCategory !== "All") {
      params.push(`category=${selectedCategory}`);
    }

    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log("Error loading menu items:", error);
      });
  }, [search, selectedCategory]);
  useEffect(() => {
  fetch("https://digital-menu-backend-731h.onrender.com/api/sections")
    .then((response) => response.json())
    .then((data) => {
      const heroSection = data.find(
        (section) => section.section_name === "hero"
      );

      if (heroSection && heroSection.image) {
        setHeroImage(heroSection.image);
      }
    })
    .catch((error) => {
      console.log("Hero image error:", error);
    });
}, []);

  return (
    <div className={darkMode ? "dark-mode min-vh-100" : "light-mode min-vh-100"}>
      
      {/* NAVBAR */}
      <nav className="menu-navbar">
        <div className="navbar-container">
          <div className="navbar-left">
  <div className="navbar-logo">La Tavola</div>

  <button
    className="mode-toggle"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
</div>
          <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <FaBars />
</button>

          <div className={menuOpen ? "navbar-links open" : "navbar-links"}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>

            
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
  className="hero-section"
  id="home"
  style={{
    backgroundImage: heroImage
      ? `linear-gradient(rgba(35,20,12,.35), rgba(35,20,12,.35)), url(${heroImage})`
      : undefined,
  }}
>
        <div className="hero-content">
          <h1>Welcome to La Tavola</h1>
         

          <p>
            Discover fresh dishes, drinks, and desserts made for every taste.
          </p>

          <a href="#menu" className="hero-btn">
            Explore Menu
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">

            <div className="about-text">
              <span className="about-label">About Us</span>

              <h2>Fresh Food, Warm Moments</h2>

              <p>
                We serve fresh dishes, refreshing drinks, and delicious desserts
                prepared with care in a warm and welcoming atmosphere.
              </p>

              <p>
                Our goal is to make every meal simple, enjoyable, and full of
                flavor.
              </p>
            </div>

            <div className="about-highlights">
              <div className="about-box">
                <span>🌿</span>
                <h4>Fresh Ingredients</h4>
              </div>

              <div className="about-box">
                <span>🍽️</span>
                <h4>Made with Care</h4>
              </div>

              <div className="about-box">
                <span>✨</span>
                <h4>Great Experience</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="menu-section">
        <div className="container py-4">

          <div className="menu-heading">
            <h2>Our Menu</h2>
            <p>Choose your favorite dish, drink, or dessert.</p>
          </div>

          {/* CATEGORIES */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">

            <button
              className={
                selectedCategory === "All"
                  ? "btn category-btn active-category m-2"
                  : "btn category-btn m-2"
              }
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>

            <button
              className={
                selectedCategory === 1
                  ? "btn category-btn active-category m-2"
                  : "btn category-btn m-2"
              }
              onClick={() => setSelectedCategory(1)}
            >
              Food
            </button>

            <button
              className={
                selectedCategory === 2
                  ? "btn category-btn active-category m-2"
                  : "btn category-btn m-2"
              }
              onClick={() => setSelectedCategory(2)}
            >
              Drinks
            </button>

            <button
              className={
                selectedCategory === 3
                  ? "btn category-btn active-category m-2"
                  : "btn category-btn m-2"
              }
              onClick={() => setSelectedCategory(3)}
            >
              Desserts
            </button>

          </div>

          {/* SEARCH */}
          <div className="search-container mb-4">
  <FaSearch className="search-icon" />

  <input
    className="search-input"
    type="text"
    placeholder="Search menu..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
  />
</div>
          {/* ITEMS */}
          <div className="row g-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <MenuItem
                    name={item.name}
                    image={
                      item.image
                      ? item.image
                        : "/images/default.jpg"
                    }
                    description={item.description}
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No items found.</p>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">

          <div>
            <h3>La Tavola</h3>
            <p>Fresh dishes, drinks, and desserts made with care.</p>
          </div>

          <div>
            <h4>Opening Hours</h4>

            <p>
              <FaClock /> Mon - Sun
            </p>

            <p>10:00 AM - 11:00 PM</p>
          </div>

          <div>
            <h4>Contact</h4>

            <p>
              <FaPhone /> +961 XX XXX XXX
            </p>

            <p>
              <FaMapMarkerAlt /> Lebanon
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 La Tavola. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;