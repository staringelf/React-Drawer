import { products } from '../lib/model';
import Product from './Product';

function Collection ({ items, addItem }) {
  return (
    <div className="p-10 grid grid-cols-3 gap-10">
      {products.map((product) => (
        <Product key={product.name} product={product} addItem={addItem}/>
      ))}
    </div>
  )
}

export default Collection;