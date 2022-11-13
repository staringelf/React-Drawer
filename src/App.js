import './App.css';
import { products } from './lib/model';
import Collection from './components/Collection';
import Drawer from './components/Drawer';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className="grid grid-cols-[11fr_3fr]">
      <Collection products={products} setItems={setItems}/>
      <Drawer items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
