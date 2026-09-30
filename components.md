# Component Documentation

## App Component

### Purpose
The App component is the main component of the application.
It displays the digital menu, category filter buttons, search bar, dark/light mode toggle, and menu items.

### Props
None.

### State

- `searchTerm`
  Stores the text entered by the user in the search input.

- `darkMode`
  Stores whether dark mode is enabled or disabled.

- `selectedCategory`
  Stores the currently selected menu category such as All, Food, Drinks, or Desserts.

### Where it is used
The App component is the main component of the application and is rendered from `main.jsx`.

---

## MenuItem Component

### Purpose
The MenuItem component displays one menu item as a Bootstrap card.

Each card shows the item's image, name, description, and price.

### Props

- `name`
  The name of the menu item.

- `image`
  The image of the menu item.

- `description`
  A short description of the menu item.

- `price`
  The price of the menu item.

### State
None.

The MenuItem component only receives and displays data, so it does not need its own state.

### Where it is used
The MenuItem component is used inside `App.jsx`.

It is rendered for each filtered menu item using the `map()` function.