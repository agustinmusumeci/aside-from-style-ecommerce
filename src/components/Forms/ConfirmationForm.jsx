import { useRef } from "react";

function ConfirmationForm() {

    const nameRef = useRef();
    const descRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const amountRef = useRef();

    return (
        <form className="mt-5 py-10 flex flex-col items-left justify-evenly gap-8 rounded-md">
                
                <label htmlFor="add-name" className="-mt-6">
                    <p>Name <span className="text-blue">*</span></p>
                    <input type="text" name="" className="w-full px-2 py-[3px] rounded-md bg-light" id="add-name" ref={nameRef} required={true}/>
                </label>

                <label htmlFor="add-description">
                    <p>Lastname <span className="text-blue">*</span></p>
                    <input type="text" name="" className="w-full px-2 py-[3px] rounded-md bg-light" id="add-description" ref={descRef} required={true}/>
                </label>

                <label htmlFor="add-category">
                    <p>Phone <span className="text-blue">*</span></p>
                    <input type="tel" name="" className="w-full px-2 py-[3px] rounded-md bg-light" id="add-category" ref={categoryRef} required={true}/>
                </label>

                <label htmlFor="add-price">
                    <p>Email</p>
                    <input type="email" name="" className="w-full px-2 py-[3px] rounded-md bg-light" id="add-price" ref={priceRef} required={true}/>
                </label>

                <label htmlFor="add-price">
                    <p>City <span className="text-blue">*</span></p>
                    <input type="text" name="" className="w-full px-2 py-[3px] rounded-md bg-light" id="add-price" ref={priceRef} required={true}/>
                </label>

                <label htmlFor="add-price">
                    <p>Adress <span className="text-blue">*</span></p>
                    <input type="text" name="" className="w-full px-2 py-[3px] rounded-md bg-light" id="add-price" ref={priceRef} required={true}/>
                </label>
        </form>
    );
}

export default ConfirmationForm