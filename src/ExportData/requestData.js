import allProductos from "../data/productos.json";

export const requestAllProductos = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(allProductos);
        }, 1000);
    }); 
}

export const requestProductosById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout( ()=>{
            const productos = allProductos.find(productos => productos.id === id);

            if (productos) {
                resolve(productos);
            }else {
                reject({
                    error: 'No se encontro el producto que buscabas'
                })
            }
        }, 1000);
    });
}