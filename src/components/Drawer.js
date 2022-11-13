import DrawerFooter from "./DrawerFooter";
import Item from "./Item";
import { useEffect, useState } from "react";

function Drawer ({ items, updateItem, removeItem }) {

  const subtotal = items.reduce((prev, item) => prev + item.price * item.quantity, 0);

  return (
    <div className="bg-slate-100 sticky top-0 h-screen overflow-scroll">
     {items.length ?
        <div className="p-4">
          <p>Cart</p>
          {items.map((item) => (
            <Item key={item.id} item={item} updateItem={updateItem} removeItem={removeItem} /> 
          ))} 
          <DrawerFooter subtotal={subtotal}/>
        </div> :
       <p className="p-4">Cart is Empty</p> 
      }
    </div>
  )
}

export default Drawer;