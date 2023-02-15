import { Link } from "react-router-dom";
import './Item.css';




const Item =({ product})=> {

    return (
        <article className="item">
            <img src={`/assets/${product.image}`} alt={product.name}/>
            <h3>{product.name}</h3>
            <Link to={`/item/${product.id}`} 
                className="itemLink">Detalle</Link>
        </article>    
    )
}

export default Item;