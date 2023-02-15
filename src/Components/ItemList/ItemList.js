import Item from "../Item/Item";
import { Link } from "react-router-dom";
import './ItemList.css';

const ItemList = ({productos }) => {
    return (
        <div className="item-list">
            <div className="container-fluid">
            {productos.map ((product) => (
              < Link Key ={product.id} to= {`/item/${product.id}`} >
                 < Item product = {product} /> 
              </ Link>
      
           ))}
       </div>
      </div>
      );
      };

  

export default ItemList;
