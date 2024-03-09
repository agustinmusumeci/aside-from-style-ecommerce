import { useContext } from "react";
import CartItem from "../components/Items/CartItem";
import { CartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import NavigationButton from "../components/NavigationButton";
import useOpacity from "../hooks/useOpacity";

function Cart() {

    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const opacity = useOpacity()

    return (
    <main>
        <section className="fluid-container min-h-[70dvh]">
            <PageTitle title="Cart">
                <p className="flex items-center gap-2">
                    <Link to="/aside-from-style-ecommerce">Home</Link> 
                    <img src="./icons/icon_arrow.svg" className="h-2" alt=">"></img>
                    <Link to="/aside-from-style-ecommerce/products">Products</Link> 
                    <img src="./icons/icon_arrow.svg" className="h-2" alt=">"></img>
                    Cart
                </p>
            </PageTitle>
            {cart.map(el => (<CartItem id={el.id} name={el.name} desc={el.desc} img={el.img} price={el.price} amount={el.amount} removeFromCart={removeFromCart} opacity={opacity}/>))}
            {cart.length != 0 ?
            <aside className="m-auto flex flex-wrap gap-5 justify-center">
                <button className="w-44 bg-black px-5 py-[6px] text-white rounded-md hover:bg-black/80 animate" onClick={clearCart}>
                    Delete Cart
                </button>
                <button className="w-44 px-5 py-[6px] border-[1px] rounded-md hover:text-white hover:bg-black animate">
                    <Link to="./confirmation">
                        Confirm Purchase
                    </Link>
                </button>
            </aside>
            :
            <aside className="text-center">
                <p className="mb-5">
                    No products have been added yet!
                </p>
                <NavigationButton url="/aside-from-style-ecommerce/products" message="Go shopping"/>
            </aside>
            }
            
        </section>
    </main>
    );
}

export default Cart