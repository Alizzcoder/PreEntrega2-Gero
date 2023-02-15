import { useEffect, useState } from "react";
import PagCargando from "../PagCargando/PagCargando";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
//import { requestAllProductos } from "../../ExportData/requestData";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer =()=> {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category} = useParams();

    

    const getProductos = () => {
        const db = getFirestore ();
        const querySnapShot = collection (db , 'items'); 
        
        if (category){
            
            const newConf = query (querySnapShot, where ("category", "==", category));
            getDocs (newConf)
            .then ((response) => {
                const data = response.docs.map ((doc) => {
                    return { id: doc.id, ...doc.data()};
                });
             console.log (data)
             setLoading(false);
             setProductos (data)   
            })
            .catch ((error)=> console.log(error));
        } else {
            getDocs (querySnapShot)
            .then ((response) => {
                const data = response.docs.map ((doc) => {
                    return { id: doc.id, ...doc.data()};
                });
           
             setLoading(false);
             setProductos (data)   
            })
            .catch ((error)=> console.log(error));
        }}
       
    
   useEffect( () => {
        getProductos ();
      }, [category]);

    return  <div>
            {loading  ? <PagCargando />:<ItemList productos={productos} />
            }
        </div>
    ;
};

export default ItemListContainer;