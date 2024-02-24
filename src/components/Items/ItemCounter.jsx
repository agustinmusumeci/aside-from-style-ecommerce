import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";

function ItemCounter({name, price, desc, stock, img, id}) {

    const [ amount, setAmount ] = useState(1);

    const { cart, addToCart, } = useContext(CartContext);

    const changeAmount = (op) => {
        // valido que la cantidad sea manor al stock, permitiendo SOLO sumar cuando sea el caso
        if (amount < stock) {
            op == "add" && setAmount(amount + 1);
        }
        // valido que la cantidad sea distinta de uno, permitiendo SOLO restar cuando sea el caso
        if (amount != 1) {
            op == "sub" && setAmount(amount - 1);
        }
    }

    return (
        <>
            <button className="mr-7 px-5 py-[6px] border-[1px] hover:bg-black hover:text-white animate rounded-md" onClick={() => addToCart({"id":id, "name":name, "price": price, "desc":desc, "amount":amount, "img":img})}>
                Add
            </button>
            <div className="px-2 py-[6px] inline-flex gap-3 border-[1px] hover:bg-black hover:text-white animate rounded-md">
                <button onClick={() => changeAmount("add")}>+</button>
                    <p className=" w-10 overflow-hidden text-center">{amount}</p>
                <button  onClick={() => changeAmount("sub")}>-</button>
            </div>
        </>
    );
}

export default ItemCounter