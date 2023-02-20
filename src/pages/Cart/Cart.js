import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../Context/cartContext"
import { collection, addDoc, getFirestore, doc, updateDoc} from "firebase/firestore"
//import ItemCount from "../../Components/ItemCount/ItemCount";
import "./cart.css"



const Cart = () => {
    const {cart, removeId, clear, sumaTotal} = useContext (cartContext);
    const [ formValue, setFormValue] = useState ({
      name:  '',
      phone: '',
      email: ''
    });
    const [order, setOrder] = useState ({});
    const db = getFirestore ();
   
    
    useEffect (() => {
      setOrder ({
        buyer:{
          name: '',
          phone: '',
          email: ''
  
        },
  
        items: cart.map ((product) => {
          const  {name, price, quantity, id} = product;
          return {name, price, quantity, id};
        }),
          total: cart.reduce ( (prodPasado, prodActual) => prodPasado + prodActual.price * prodActual.quantity, 0),
              
       });
    }, [cart]);

    if (cart.length === 0 ){
      return <h2> El carrito esta vacío</h2>
   } 
    
   const crearOrder= (event) => {
    event.preventDefault ();
    const querySnapshot = collection (db, 'orders');

    const currentOrder = {
      ...order,
      buyer: formValue,
    }
    
    addDoc(querySnapshot, currentOrder)
          .then((response)=>{
              console.log(response.id);
              updateStock ();
              alert ('Orden generada con exito. Gracias por tu compra!' )

          } )
          .catch(error => console.log (error))
   }

    const updateStock = () => {
      cart.forEach ((product)=> {
       const querySnapshot = doc(db, 'items', product.id);
          
          updateDoc (querySnapshot, {
          //  stock: product.stock - product.quantity,
          // Para evitar quedarme sin stock
          stock: 15 - product.quantity,
        } )

        .then (()=> {
          console.log ( "Se actualizo el stock ")
         })
        .catch ((error)=> console.log (error))

      });
    }

    const hadleInput= (event) => {
      setFormValue({...formValue, [event.target.name]: event.target.value})
    }

  return (

    <div className="tablaCart">
      <table>
      <thead>
        <tr>
          <th> <h4>Producto </h4></th>
          <th> <h4>Descripción </h4> </th>
          <th> <h4>Cantidad </h4></th>
          <th> <h4>Precio Unitario</h4> </th>
          <th> <h4>Sub Total</h4> </th>
          <th> <h4> </h4></th>
        </tr>
        </thead>
        
        <tbody>
       {cart.map (( product) => (
        
        <tr key={product.id}>
          <td><img alt={product.name} src ={`/assets/${product.image}`} width= "150px"/></td>
          <td>{product.name} </td> 
          <td>{product.quantity} </td>
          <td>${product.price} </td>
          <td>$ {product.quantity * product.price} </td>
          <td>  <button className="btn" onClick={()=> removeId (product.id)} > Eliminar </button></td>
        </tr>
            ))
            } 
            <tr>
            <td> <h4> </h4></td>
            <td> <h4> </h4></td>
            <td> <h4> </h4></td>
            <td> <h4> TOTAL: </h4></td>
            <td> <h4>$ {sumaTotal()} </h4></td>
            </tr>
            </tbody> 
            </table>
            
            <div className="formulario">
            <br/>
              <form className="form" style={ {display:'flex', flexDirection:'column', alignItems:'center' }}>
              <input name='name' value={formValue.name} type= "text" placeholder="name" onChange={hadleInput} 
                  style={{margin:'10px', width:'350px'}}/>
              <input name='phone' value={formValue.phone}type= "text" placeholder="phone" onChange={hadleInput} 
                  style={{margin:'10px', width:'350px'}}/>
              <input name='email' value={formValue.email} type= "email" placeholder="email" onChange={hadleInput}
                  style={{margin:'10px', width:'350px'}}/>
              <button className="btn" onClick={crearOrder}>Crear orden </button>
              <button className="btn" onClick={()=> clear()}>Vaciar carrito </button>
              </form>
            </div>    


    </div>
        
  );

};

export default Cart