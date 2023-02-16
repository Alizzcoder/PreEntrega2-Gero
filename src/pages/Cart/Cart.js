import { useContext } from "react"
import { cartContext } from "../../Context/cartContext"
//import ItemCount from "../../Components/ItemCount/ItemCount";
import "./cart.css"



const Cart = () => {
    const {cart, removeId, clear} = useContext (cartContext);
   if (cart.length === 0 ){
    return <h2> El carrito esta vacío</h2>
   } 
  return (

    <div className="tablaCart">
      <table>
        <tr>
          <th> <h4>Producto </h4></th>
          <th> <h4>Descripción </h4> </th>
          <th> <h4>Cantidad </h4></th>
          <th> <h4>Precio Unitario</h4> </th>
          <th> <h4> </h4></th>
        </tr>

        
       {cart.map (( product) => (
        
        <tr key={product.id}>
          <td><img alt={product.name} src ={`/assets/${product.image}`} width= "150px"/></td>
          <td>{product.name} </td> 
          <td>{product.quantity} </td>
          <td>${product.price} </td>
          <td>  <button className="btn" onClick={()=> removeId (product.id)} > Eliminar </button></td>
        </tr>
            ))
            
            } 
     
            <tr>
            <td> 
              <button className="btn" onClick={()=> clear()}>Vaciar carrito </button>
              </td>
            </tr>
            </table>

    </div>
    
    
  );

};

export default Cart