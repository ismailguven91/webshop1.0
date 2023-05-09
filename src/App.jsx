import { useState } from 'react';
import Items from './Components/Items';
import itemsMock from './Mockdata/itemsMock';
import Box from '@mui/material/Box';
import './style.css';

const App = () => {

  const [addedItem, setAddedItem] = useState('');

  const addToCart = (item) => {
    console.log(`Added item ${item.name} to cart`);
    setAddedItem(item.name);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <header>
        {/* <a href="#">
          <img src="https://dummyimage.com/200x50/000/fff" alt="Logo" />
        </a> */}
        LOGO
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main class="main-content">
        <h1>Items for sale:</h1>
        <Items items={itemsMock} onAdd={handleAddToCart} />
        {addedItem && (
          <Box sx={{ width: '100%' }}>
            <h1>Added item {addedItem} to cart</h1>
          </Box>
        )}
      </main>
      <footer>
        <div class="container">
          <div class="col">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Returns &amp; Exchanges</a></li>
            </ul>
          </div>
          <div class="col">
          </div>
        </div>
        <div class="bottom">
        </div>
      </footer>
    </div>
  );
};

export default App;
