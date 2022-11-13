import './App.css';
import { useState } from 'react';
import { products } from './lib/model';
import Collection from './components/Collection';
import Drawer from './components/Drawer';

function App() {

  const [items, setItems] = useState([]);

  function addItem (product) {
    console.log(items);
    const itemInCart = items.find((item) => item.id === product.id);
    if (itemInCart) {
      updateItem(product.id, itemInCart.quantity + 1)
      return;
    } 
    const item = {
      ...product,
      quantity: 1
    }
    setItems([
      item,
      ...items
    ]);
  }

  function updateItem(id, quantity){
    const index = items.findIndex((item) => item.id === id);
    items[index].quantity = quantity;
    setItems([
      ...items
    ])
  }

  function removeItem(id) {
    setItems(items.filter(item => item.id !== id ));
  }

  return (
    <div className="grid grid-cols-[10fr_3fr]">
      <Collection products={products} addItem={addItem}/>
      <Drawer items={items} updateItem={updateItem} removeItem={removeItem}/>
    </div>
  );
}

export default App;
