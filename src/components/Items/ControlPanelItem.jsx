import { useId } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function ControlPanelItem({id, name, desc, img, price, stock, category, handleDeleteClick}) {

    const itemId = useId();

    const url = `./${name}`

    return (
        <Item title={name} stock={stock} price={price} img={img} itemId={itemId}>
            <aside className="">
                <Link to={url}>
                    <button className="py-[6px] px-5 m-5 flex border-[1px] items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 ease-in-out">
                        Modify product
                    </button>
                </Link>
                <button className="py-[6px] px-5 m-5 flex items-center justify-center rounded-md bg-black text-white hover:bg-black/80 duration-300 ease-in-out" onClick={() => handleDeleteClick(name, category)}>
                    Delete product
                </button>
            </aside>
        </Item>

    );
}

export default ControlPanelItem