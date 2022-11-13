import './App.css';
import { products } from './lib/model';
import Collection from './components/Collection';
import Drawer from './components/Drawer';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);

  function addItem (product) {
    console.log(items);
    const itemIsInCart = items.find((item) => item.id === product.id);
    console.log(itemIsInCart);
    if (itemIsInCart) return; 
    const item = {
      ...product,
      quantity: 1
    }
    setItems([
      ...items,
      item
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
    <div className="grid grid-cols-[11fr_3fr]">
      <Collection products={products} items={items} addItem={addItem}/>
      <Drawer items={items} updateItem={updateItem} removeItem={removeItem}/>
    </div>
  );
}

export default App;
