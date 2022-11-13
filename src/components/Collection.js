import { products } from '../lib/model';
import Product from './Product';

function Collection ({ items, setItems }) {
  return (
    <div className="p-10 grid grid-cols-3 gap-10">
      {products.map((product) => (
        <Product key={product.name} product={product} items={items} setItems={setItems}/>
      ))}
    </div>
  )
}

export default Collection;