import { useState } from "react";
import './estilo.css';



const ItemCount = ({stock}) => {
  const [contador, setContador] = useState (1)
  
  const sumar= () => {
    if (contador === {stock}){
        return;
            }
        setContador (contador+1);
    };

   const restar= () => {
     if (contador ===0){
        return;
        }
        setContador (contador-1)
    };
  
   return (
        <div className="counter">
        <div className="controllers">
             <button className= "mat" onClick={restar}> - </button>
                <div> 
                    <span>{contador}</span>
                </div>
             <button className= "mat"onClick={sumar}> + </button>
        </div>
        <button className= "compra"> Agregar al carrito </button>
    </div>
  )
};

export default ItemCount