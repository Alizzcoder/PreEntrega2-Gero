import { useContext } from "react"
import { cartContext } from "../../Context/cartContext"
import ItemCount from "../../Components/ItemCount/ItemCount";


const Cart = () => {
    const {cart, removeId, clear} = useContext (cartContext);
   if (cart.length ===0 ){
    <h2> El carrito esta vacío</h2>
   }
  return (
    <div>
       {cart.map (( product) => (
        <h2 key={product.id}>
          <img alt={product.name} src ={`/assets/${product.image}`} width= "50px"
           />{product.name} {product.quantity} {product.price} 
           <ItemCount/>
            <button onClick={()=> removeId (product.id)} > Eliminar </button></h2>
            ))} 
            <div>
            <button onClick={()=> clear()}>Vaciar carrito </button>
            </div>
    </div>
    
    
  );
    
};

export default Cart