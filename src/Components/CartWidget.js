import { useState } from "react";
import { useContext, useEffect} from "react"
import { cartContext } from "../Context/cartContext"

export const CartWidget = () => {
  const {cart} = useContext(cartContext);
  const [total, setTotal] = useState (0);
  
  useEffect (() => {
    setTotal (
      cart?.reduce ((prev, curr)=> {
        console.log (prev, curr)
        return prev+ curr.quantity;  
      }, 0))
  }, [cart] )

    
  return (
    
    <div>
      {total}
      <img className="imgCarrito" alt="Carrito" src="/assets/carrito.jpg "  srcSet="" width= "50px" />
           
    </div>
  )
}

export default CartWidget