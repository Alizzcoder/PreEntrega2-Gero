import { useState } from "react";
import { cartContext } from "./cartContext";


const CartProvider = ({children})=> {

    const [cart , setCart] = useState ([]);

    const addItem = (item, quantity) =>{
        
        if (isInCart (item.id)){
            alert ("El producto ya se encuenta en el carrito")
        }else{

            const newProduct = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            category: item.category,
            image: item.image,
            };
         
            setCart([...cart, newProduct])
        }
};

const removeId = (id)=> {
    setCart(cart.filter ((product)=> product.id!==id ));
};

const isInCart =(id)=>{
return cart.some ((item)=> item.id === id)
}

const clear = () => {
    setCart ([]);
};

return (
 <cartContext.Provider value={{cart, addItem, clear, removeId}}>
    { /*app.js*/}
    {children}
    </cartContext.Provider>
);
};

export default CartProvider