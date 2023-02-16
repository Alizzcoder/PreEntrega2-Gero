//import { useState, useEffect } from "react";
import './estilo.css';



const ItemCount = ({contador, setContador, stock}) => {
  //const [contador, setContador] = useState (1)
  
  
  const onAdd= () => {
    if (stock === contador){
      alert ("Llegaste al número máximo de unidades disponbiles")
        return;
            }
        setContador (contador+1);
    };

   const restar= () => {
     if (contador <=1){
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
             <button className= "mat"onClick={onAdd}> + </button>
        </div>
       
    </div>
  )
};

export default ItemCount
