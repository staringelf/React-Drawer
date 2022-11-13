import slug from "slug";
import { formatMoney } from "../lib/helpers";

function Drawer ({ items }) {
  return (
    <div className="p-4 bg-slate-100">
     {items.length ?
        items.map(({ name, price, quantity }) => (
          <div>
            <img src={`../images/${slug(name)}.jpg`} alt={name}/> 
            <p>{formatMoney(price)}</p>
            <p>Quantity: {quantity}</p>
          </div>
        )) :
       <p>Cart is Empty</p> 
      }
    </div>
  )
}

export default Drawer;