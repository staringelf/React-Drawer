import { useState } from "react";
import slug from "slug";
import { formatMoney } from '../lib/helpers';

function Product ({ product }) {
  const { name, price, inventory } = product;

  const [stock, setStock] = useState(inventory);

  function handleClick(){
    if (!stock) {
      alert('Out of stock')
      return;
    }
    setStock(stock - 1);
  }

  return (
    <div>    
      <img src={`../images/${slug(name)}.jpg`} alt={name}/>
      <p className="mb-2">{ formatMoney(price) }</p>
      <button className={`border py-1 px-5 rounded-2 ${stock <= 0 ? 'disabled' : ''}`}
              onClick={(handleClick)}
      > Add To Cart </button>
    </div>
  )
}

export default Product;