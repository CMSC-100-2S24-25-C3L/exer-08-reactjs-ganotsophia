import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavButton from './components/menu'; 
  
function App() {
  const [count, setCount] = useState(0)

  const menus = [
    { code: "Appliances",  id: 1 },
    { code: "Groceries",  id: 2 },
    { code: "Clothing", id: 3 },
  ];

  const addToCart = (item) => {
    console.log(`Added ${item} to cart`); 
  };

  return (
    <>
      <div class="header">
        <h1>Lazado</h1>
        <div class="nav-menu">
        {menus.map((menu) => (
            <NavButton 
              key={menu.id} 
              name={menu.code} 
              onClick={() => addToCart(menu.code)} 
            />
          ))}
        </div>
      </div>
    <div class = "body">
      <div class = "Appliances">
          <img src = "https://www.reliant.co.uk/blog/wp-content/uploads/2023/09/Airfryer.jpg"></img>
          <button onClick={() => addToCart("Air Fryer")}>Add to Cart</button>
      </div>

      <div class = "groceries">
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVCsPJmXFCpDoNFpO-DXBv5B_3mPpC2RUwA&s"></img>
          <button onClick={() => addToCart("Datu Puti")}>Add to Cart</button>

      </div>

      <div class = "gadget">
          <img src = "https://img.drz.lazcdn.com/static/bd/p/373805cd97649602785d9504ed85c404.jpg_720x720q80.jpg"></img>
          <button onClick={() => addToCart("Iphone Barbie")}>Add to Cart</button>

      </div>

      <div class = "clothing">
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOBIxbKKRaCuau5BymjOjsfFLPyEA4JZhag&s"></img>
          <button onClick={() => addToCart("Nike Original")}>Add to Cart</button>

      </div>

    </div>
    </>


  )
}

export default App
