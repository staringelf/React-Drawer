import { useState } from "react";
import slug from "slug";
import { formatMoney } from '../lib/helpers';

function Product ({ product, items, setItems }) {
  
  const { name, price, inventory, id } = product;

  const [stock, setStock] = useState(inventory);

  function addToCart () {
    const item = {
      ...product,
      quantity: 1
    }

    const productInCart = items.find(item => item.id === product.id);

    if (productInCart) {
      item.quantity = productInCart.quantity + 1;
    }

    setItems([
      ...items,
      item
    ]);
  }

  function handleClick(){
    if (!stock) {
      alert('Out of stock')
      return;
    }
    addToCart();
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