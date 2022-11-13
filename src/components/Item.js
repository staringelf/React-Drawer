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

  function incrementQuantity(e) {
    setQuantity(quantity + 1);
  }

  function decrementQuantity(e) {
    setQuantity(quantity - 1);
  }

  return (
    <div className="grid grid-cols-[3fr_7fr] py-4">
      <div className="min-h-item">
        <img className="h-full object-cover" src={`../images/${slug(name)}.jpg`} alt={name}/> 
      </div>
      <div className="py-2 px-4 text-gray-600">
        <h3 className="mb-2 font-bold uppercase text-gray-600">{name}</h3>
        <p className="text-sm mb-2">{formatMoney(price)}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <button onClick={(decrementQuantity)} className="w-5 h-5 bg-white leading-none rounded-sm">-</button>
            <label> <span className="sr-only">Quantity:</span> 
              <input className="w-4 h-4 px-1 text-center appearance-none bg-transparent text-xs" type="text" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            </label>
            <button onClick={incrementQuantity} className="w-5 h-5 bg-white leading-none rounded-sm">+</button>
          </div>
          <button className="text-sm underline underline-offset-4" onClick={handleRemoveClick}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Item;