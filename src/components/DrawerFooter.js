import { formatMoney } from "../lib/helpers";

function DrawerFooter ({ subtotal}) {
  return (
  <div className="py-1 flex justify-between border-t-2 border-gray-600">
    <span className="uppercase text-sm tracking-wide">Subtotal</span>
    <p>{formatMoney(subtotal)}</p>
  </div>
  )
}

export default DrawerFooter;