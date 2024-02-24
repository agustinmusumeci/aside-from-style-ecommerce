import { useRef } from "react";

function AddForm({AddToDB, handleReset}) {

    const nameRef = useRef();
    const descRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();
    const amountRef = useRef();
    const featuredRef = useRef();

    return (
        <form className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-10 flex flex-col items-center gap-8 border-[1px] rounded-md" onSubmit={(e) => AddToDB(e, nameRef, descRef, categoryRef, priceRef, stockRef, amountRef)}>
                <label htmlFor="add-name">
                    <p>Name</p>
                    <input type="text" name="" className="px-2 py-[3px] rounded-md border-[1px]" id="add-name" ref={nameRef} required={true}/>
                </label>

                <label htmlFor="add-description">
                    <p>Description</p>
                    <input type="text" name="" className="px-2 py-[3px] rounded-md border-[1px]" id="add-description" ref={descRef} required={true}/>
                </label>

                <label htmlFor="add-category">
                    <p>Category</p>
                    <input type="text" name="" className="px-2 py-[3px] rounded-md border-[1px]" id="add-category" ref={categoryRef} required={true}/>
                </label>

                <label htmlFor="add-price">
                    <p>Price</p>
                    <input type="text" name="" className="px-2 py-[3px] rounded-md border-[1px]" id="add-price" ref={priceRef} required={true}/>
                </label>

                <label htmlFor="add-stock">
                    <p>Stock</p>
                    <input type="text" name="" className="px-2 py-[3px] rounded-md border-[1px]" id="add-stock" ref={stockRef} required={true}/>
                </label>

                <label className="hidden" htmlFor="defaultvalue">
                    <input type="text" name="" id="defaultvalue" defaultValue={0} ref={amountRef} />
                </label>
                <div className="flex gap-5 flex-wrap">
                    <button type="submit" className="px-5 py-[6px] bg-black text-white rounded-md hover:bg-black/80 hover:text-white animate">
                        Add
                    </button>
                    <a type="" className="px-5 py-[6px] rounded-md border-[1px]  hover:bg-black hover:text-white animate cursor-pointer" onClick={() => handleReset(nameRef, descRef, priceRef, stockRef, categoryRef)}>
                        Clear
                    </a>
                </div>
            </form>
    );
}

export default AddForm