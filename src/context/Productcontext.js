import { createContext } from "react";
import { apiProduct } from "./Api";

const ProductContext = createContext();

//proveedor del contexto

const ProductProvider = ({children}) => {

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
        
        return resp;
    }
    const data = {handleCreate}

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;