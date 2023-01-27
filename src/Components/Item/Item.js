import { Link } from "react-router-dom";
import './Item.css';


function Item( { id, image, name, price } ) {

    return (
        <article className="item">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <h3>{name}</h3>
            <Link to={`/item/${id}`} className="itemLink">COMPRAR</Link>
        </article>    
    )
}

export default Item;