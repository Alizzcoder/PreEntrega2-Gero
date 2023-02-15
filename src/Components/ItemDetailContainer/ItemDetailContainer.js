import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { requestProductosById } from "../../ExportData/requestData";
import ItemDetail from "../ItemDetail/ItemDetail";
//import PagCargando from "../PagCargando/PagCargando";
import {getFirestore, doc, getDoc} from "firebase/firestore";


const ItemDetailContainer= () => {
    const [singleProduct, setSingleProduct] = useState ({});
    const {id}= useParams ();

    const getProduct = () => {
        const db = getFirestore ();
        const querySnapshot = doc (db, "items", id);

        getDoc(querySnapshot)
        .then ((response)=>{
            console.log (response.id);
            console.log (response.data());
            setSingleProduct ({id:response.id, ...response.data()});
            
        })
        . catch((error) => {console.log (error)})
    }


   /* const [productos, setProductos] = useState(null);
    const [error, setError] = useState(null);
    const { itemId } = useParams();*/


    useEffect( () => {
     getProduct()
    }, []);
     return (
     <div> <ItemDetail product={singleProduct} /></div>)

       /* requestProductosById(Number(itemId))
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
    )*/
}

export default ItemDetailContainer;