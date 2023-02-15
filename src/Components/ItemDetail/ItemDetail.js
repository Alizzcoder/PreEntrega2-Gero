import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../Context/cartContext";
import { useState, useContext } from "react";
import './ItemDetail.css';



const ItemDetail =( { product } )=>  {
    const {addItem} = useContext (cartContext);
    const navigate = useNavigate();
    const atras = () => {navigate(-1);}
    const [contador, setContador] = useState (1);
   
    

    return (
        <div className="ficha">
          <article className="datosficha">
            <img src={`/assets/${product.image}`} alt={product.name}/>
                            
                <div>
                    <p className="descripcion">{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Unidades disponibles: {product.stock}</p>
                    <ItemCount
                        contador= {contador}
                        actualizarValor={setContador}
                        stock={product.stock}
                        
                    />
                    <div>
                        <button className= "compra" onClick={() => addItem(product, contador) }> 
                        Agregar al carrito{''}
                        </button>
                     </div>
                        <button className="volver" onClick={atras}>Volver</button>
                    </div>
            
        </article>    
        </div>
          
    )
}

export default ItemDetail;