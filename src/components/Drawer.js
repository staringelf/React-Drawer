import Item from "./Item";

function Drawer ({ items, updateItem, removeItem }) {
  return (
    <div className="p-4 bg-slate-100">
     {items.length ?
        <div>
          <p>Cart</p>
          {items.map((item) => (
            <Item key={item.id} item={item} updateItem={updateItem} removeItem={removeItem} /> 
          ))} 
        </div> :
       <p>Cart is Empty</p> 
      }
    </div>
  )
}

export default Drawer;