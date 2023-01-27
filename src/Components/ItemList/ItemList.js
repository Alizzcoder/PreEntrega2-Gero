import Item from "../Item/Item";
import './ItemList.css';

function ItemList( { productos } ) {
    return (
        <div className="item-list">
            <div className="container-fluid">
                
                    {
                        productos.map( product => (
                            <Item {...product} key={product.id} />
                        ))
                    }
                
            </div>
        </div>
    )     
}

export default ItemList;