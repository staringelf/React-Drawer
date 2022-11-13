import { useEffect, useState } from "react";
import slug from "slug";
import { formatMoney } from "../lib/helpers";

function Item ({ item, updateItem, removeItem }) {
  const { name, price, id } = item;

  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    quantity > 0 ? updateItem(id, quantity) : removeItem(id);
  }, [quantity] );

  function handleRemoveClick () {
    removeItem(id);
  }

  return (
    <div>
      <img src={`../images/${slug(name)}.jpg`} alt={name}/> 
      <p>{formatMoney(price)}</p>
      <label>Quantity: 
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </label>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  )
}

export default Item;