import { useContext } from "react";
import useFetch from "./useFetch";
import { ProductsContext } from "../contexts/productsContext";

function useFilter() {

    const { setData } = useContext(ProductsContext);

    const products = useFetch("get-products-api")

    const filterProducts = (e) => {
        const category = e.target.value

        category == "all" 
        ? 
        setData(products) 
        :
        setData(products.filter(product => product.category == category))
    }



    return { filterProducts }

}
export default useFilter