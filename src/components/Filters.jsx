import useFilter from "../hooks/useFilter"
import { useState } from "react";

function Filters() {

    const { filterProducts } = useFilter()

    return (

        <aside className="mb-5 flex gap-1 overflow-x-auto overflow-y-hidden">
            <label htmlFor="" className="relative mr-5">
                <input type="radio" name="all" defaultChecked category="all" onClick={(e) => filterProducts(e)}  defaultValue="all" className="absolute w-10 h-10 -top-1 right-3 appearance-none cursor-pointer"/>
                <p className=" px-5 py-[3px] flex items-center border-[1px] rounded-md">All</p>
            </label>

            <label htmlFor="" className="relative mr-5">
                <input type="radio" name="all" category="tshirt" onClick={(e) => filterProducts(e)} defaultValue="tshirt" className="absolute w-12 h-10 -top-1 right-5 appearance-none cursor-pointer"/>
                <p className="px-5 py-[3px] flex items-center border-[1px] rounded-md">Tshirt</p>
            </label>

            <label htmlFor="" className="relative mr-5">
                <input type="radio" name="all" category="pant" onClick={(e) => filterProducts(e)} defaultValue="pant" className="absolute w-10 h-10 -top-1 right-4 appearance-none cursor-pointer"/>
                <p className="px-5 py-[3px] flex items-center border-[1px] rounded-md">Pant</p>
            </label>

            <label htmlFor="" className="relative mr-5">
                <input type="radio" name="all" category="hoodie" onClick={(e) => filterProducts(e)} defaultValue="hoodie" className="absolute w-14 h-10 -top-1 right-5 appearance-none cursor-pointer"/>
                <p className="px-5 py-[3px] flex items-center border-[1px] rounded-md">Hoodie</p>
            </label>
        </aside>
    );
}

export default Filters