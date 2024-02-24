import { useRef } from "react";

function ConfigForm({id, name, price, desc, stock, img, category, handleReset, updateFromDB}) {

    const nameRef = useRef();
    const descRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();

    return (
        
        <form className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-10 flex flex-col items-center gap-8 border-[1px] rounded-md" onSubmit={(e) => updateFromDB(e, nameRef, descRef, priceRef, stockRef, id, categoryRef)}>
            <label htmlFor="config-name">
                <p>Name</p>
                <input type="text" name={name} defaultValue={name} className="px-2 py-[3px] rounded-md border-[1px]" id="config-name" ref={nameRef} required={true}/>
            </label>

            <label htmlFor="config-description">
                <p>Description</p>
                <input type="text" name={desc} defaultValue={desc} className="px-2 py-[3px] rounded-md border-[1px]" id="config-description" ref={descRef} required={true}/>
            </label>

            <label htmlFor="config-category">
                <p>Category</p>
                <input type="text" name={category} defaultValue={category} className="px-2 py-[3px] rounded-md border-[1px]" id="config-category" ref={categoryRef} required={true}/>
            </label>

            <label htmlFor="config-price">
                <p>Price</p>
                <input type="text" name={price} defaultValue={price} className="px-2 py-[3px] rounded-md border-[1px]" id="config-price" ref={priceRef} required={true}/>
            </label>

            <label htmlFor="config-stock">
                <p>Stock</p>
                <input type="text" name={stock} defaultValue={stock} className="px-2 py-[3px] rounded-md border-[1px]" id="config-stock" ref={stockRef} required={true}/>
            </label>
            <div className="flex gap-5 flex-wrap">
                <button type="submit" className="px-5 py-[6px] bg-black text-white rounded-md hover:bg-black/80 animate">
                    Modify
                </button>
                <a className="px-5 py-[6px] rounded-md border-[1px] hover:bg-black hover:text-white animate cursor-pointer" onClick={() => handleReset(nameRef, descRef, priceRef, stockRef)}>
                    Reset
                </a>
            </div>
        </form>

    );
}

export default ConfigForm