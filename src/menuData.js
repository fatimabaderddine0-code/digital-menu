const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Food",
    description: "Beef burger with cheese and fresh vegetables.",
    price: 8,
    image: `${import.meta.env.BASE_URL}images/burger.png`
  },
  {
    id:2,
    name: " Margherita Pizza",
    category: "Food",
    description :"Fresh pizza with tomato sauce, mozzarella, and basil.",
    price : 10,
    image:`${import.meta.env.BASE_URL}images/pizza.png`

  },
  {
    id: 3,
    name: "Creamy Pasta",
    category: "Food",
    description: "Creamy pasta with chicken, mushrooms, and parmesan.",
    price: 9,
    image: `${import.meta.env.BASE_URL}images/fettucine.png`
  },
  {
  id: 4,
  name: "Coffee",
  category: "Drinks",
  description: "Hot coffee with a rich and smooth flavor.",
  price: 4,
  image: `${import.meta.env.BASE_URL}images/coffee.png`
},
{
  id: 5,
  name: "Fresh Orange Juice",
  category: "Drinks",
  description: "Freshly squeezed orange juice served cold.",
  price: 5,
  image: `${import.meta.env.BASE_URL}images/juice.png`
},
{
  id: 6,
  name: "Mojito",
  category: "Drinks",
  description: "Refreshing lime and mint mojito served with ice.",
  price: 6,
  image: `${import.meta.env.BASE_URL}images/mojito.png`
},
{
  id: 7,
  name: "Chocolate Cake",
  category: "Desserts",
  description: "Rich chocolate cake with creamy chocolate layers.",
  price: 6,
  image: `${import.meta.env.BASE_URL}images/cake.png`
},
{
  id: 8,
  name: "Ice Cream",
  category: "Desserts",
  description: "A delicious mix of chocolate, vanilla, and strawberry ice cream.",
  price: 5,
  image: `${import.meta.env.BASE_URL}images/ice-cream.png`
},
{
  id: 9,
  name: "Chocolate Brownie",
  category: "Desserts",
  description: "Warm chocolate brownie served with vanilla ice cream.",
  price: 6,
  image: `${import.meta.env.BASE_URL}images/brownie.png`
}
];

export default menuItems;