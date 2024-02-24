import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
// import * as dotenv from "dotenv";

// creamos el contexto
export const ProductsContext = createContext({});

// creamos el proveedor global del contexto
export const ProductsProvider = ( {children} ) => {

    // dotenv.config();

    const [data, setData] = useState([]);
    const response = useFetch("get-products-api");
    
    useEffect(() => {
        setData(response)
    }, [response])

    
    return (
        <ProductsContext.Provider value={{ data, setData  }}>
            {children}
        </ProductsContext.Provider>
    );
}