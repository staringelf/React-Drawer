import './App.css';
import { products } from './lib/model'
import Collection from './components/Collection';

function App() {
  return (
    <div class="collection">
      <Collection products={products}/>
    </div>
  );
}

export default App;
