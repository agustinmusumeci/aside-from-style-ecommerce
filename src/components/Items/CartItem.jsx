import { useId } from "react";
import Item from "./Item";

function CartItem({id, name, desc, img, price, amount, removeFromCart, opacity}) {

    const itemId = useId()

    const url = `/products/${name}`

    return (
        <Item title={name} img={img} price={price} amount={amount} url={url} itemId={itemId} opacity={opacity}>
            <div className="">
                <button className="absolute right-2 bottom-2 sm:top-2 w-7 h-7 flex items-center justify-center hover:scale-105 animate rounded-md" onClick={() => removeFromCart(id)}>
                    <img src="../../icons/icon_cross.svg" className="h-4"></img>
                </button>
            </div>
        </Item>
    );
}

export default CartItem