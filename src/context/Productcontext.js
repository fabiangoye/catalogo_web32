import { createContext, useEffect, useState } from "react";
import { apiProduct, apiProductByUser } from "./Api";

const ProductContext = createContext();

//proveedor del contexto

const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);// se inicializa un arreglo vacío


    useEffect(() => {
        getProducts();
    }, []);// si dejo este arreglo vacío el hook se ejecuta en el punto de montaje

    const handleCreate= async (objProduct)=>{
        const token = localStorage.getItem('token');//obteniendo el token del localStorage
        const resp = await fetch(apiProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`//enviando el token en la autorización
            },
            body: JSON.stringify(objProduct)
        });

         if(resp.status === 201){//si se creó, osea status 201 (created)
            getProducts();
         }
        
        return resp;
    }

    const getProducts = async() => {
        const token = localStorage.getItem('token');
        let resp = await fetch(apiProductByUser,{
            method: 'GET',
            headers:{
                'Content_Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
            //como es GET no se pasa un body

        });
        if(resp.status === 200){
           let json = await resp.json(); //acá se obtiene el cuerpo de esa respuesta, osea el json de esa respuesta. El método json() devuelve una promesa, por eso se usa el await
            setProducts(json);
        
        }

        return resp.status;
    }
    const data = {handleCreate, getProducts, products};

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;