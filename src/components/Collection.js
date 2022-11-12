import { products } from '../lib/model';
import slug from 'slug';

function Collection () {
  return (
    <div>
      {products.map((product) => (
        <div className="product">
          <img src={`../images/${slug(product.name)}.jpg`} alt={product.name}/>
          <h2>{ product.name }</h2>
          <p>{ product.price }</p>
        </div>
      ))}
    </div>
  )
}

export default Collection;