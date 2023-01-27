import { useEffect, useState } from "react";
import PagCargando from "../PagCargando/PagCargando";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { requestAllProductos } from "../../ExportData/requestData";


function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemName, categoryId } = useParams();

    useEffect( () => {
        setProductos([]);
        setLoading(true);
        requestAllProductos()
            .then( (respuesta) => {
                if (itemName) {
                    let name = itemName();
                    setProductos(respuesta.filter( productos => productos.name.toLowerCase().includes(name)));
                    setLoading(false);
                } else if (categoryId) {
                    setProductos(respuesta.filter( productos => productos.category === categoryId ));
                    setLoading(false);
                } else {
                    setProductos(respuesta);
                    setLoading(false);
                }
            })
            .catch( (error) => {
                console.log(error);
            });
    }, [ itemName, categoryId]);

    return (
        <div>
            {
              loading  ? <PagCargando />: productos.length === 0 ? "No hay Stock" : <ItemList productos={productos} />
            }
        </div>
    );
}

export default ItemListContainer;