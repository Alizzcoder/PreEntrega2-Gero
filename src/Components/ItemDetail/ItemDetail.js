import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';



function ItemDetail( { name, image, description, price, stock } ) {
    
    const navigate = useNavigate();

    const atras = () => {navigate(-1);}

    return (
        <div className="ficha">
          <article className="datosficha">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
                            
                <div>
                    <p className="descripcion">{description}</p>
                    <p>Precio: ${price}</p>
                    <p>Cantidad disponible: {stock}</p>
                    <ItemCount/>
                    <button className="volver" onClick={atras}>Volver</button>
                </div>
            
        </article>    
        </div>
          
    )
}

export default ItemDetail;