import { products } from '../lib/model';
import Product from './Product';

function Collection () {
  return (
    <div className="p-10 grid grid-cols-3 gap-10">
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  )
}

export default Collection;