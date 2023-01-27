import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductosById } from "../../ExportData/requestData";
import ItemDetail from "../ItemDetail/ItemDetail";
import PagCargando from "../PagCargando/PagCargando";


function ItemDetailContainer() {

    const [productos, setProductos] = useState(null);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    useEffect( () => {
        requestProductosById(Number(itemId))
            .then( (respuesta) => { setProductos(respuesta);
               setError(null);
            })
            .catch( (err) => { setError(err.error);
            });
        }, [itemId]);

    return (
        <div>
            {
              error ? "Error" : productos ? <ItemDetail {...productos} /> : <PagCargando />
            }
        </div>
    )
}

export default ItemDetailContainer;