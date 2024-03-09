import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../contexts/productsContext";

import ProductCard from "../components/Cards/ProductCard";
import Filters from "../components/Filters";

import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import useOpacity from "../hooks/useOpacity";

function Products() {

    const { data } = useContext(ProductsContext);
    
    const opacity = useOpacity()

    return (
    <main>
        <section className="fluid-container min-h-[70dvh]">
            <PageTitle title="Products">
                <p className="flex items-center gap-2">
                    <Link to="/aside-from-style-ecommerce">
                    Home
                    </Link> 
                    <img src="./icons/icon_arrow.svg" className="h-2" alt=">"></img>
                    Products
                </p>
            </PageTitle>
            <Filters className=""/>
            <section className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
            
            {data && data.map( product => (
                <ProductCard name={product.name} price={product.price} desc={product.description} img={product.img} stock={product.stock} id={product._id} category={product.category} featured={product.featured} opacity={opacity}/>
            ))}
            </section>
        </section>
    </main>
    );
}

export default Products