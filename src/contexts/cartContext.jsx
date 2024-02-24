import { useEffect, useState } from "react";

import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])

    const [ counter, setCounter ] = useState(0) 

    const [ refresh, setRefresh ] = useState(false)

    // controla el carrito del LocalStorage
    useEffect( () => {

        // busco en el session storage y si el carrito ya fue creado, lo guardo en el useState
        if ( (JSON.parse(localStorage.getItem("cart")) != null)) {
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
        
    }, [])
    
    // controla el contador de productos
    useEffect( () => {
        // reinicio el cotnador
        setCounter(0)
        let count = 0

        // sumo todos los amount de los products
        cart.forEach(el => count += el.amount)
        setCounter(count)
    }, [refresh, cart])

    const updateCart = (auxCart) => {
        // seteo el nuevo carrito
        setCart(auxCart)

        // guardo el carrito en el storage
        localStorage.setItem("cart", JSON.stringify(auxCart));

        // triggereo el refresh del contador de productos
        setRefresh(!refresh)
    }

    const addToCart = (product) => {
        
        // saco el indice, en caso de que el producto ya exista
        const index = cart.findIndex(el => el.id == product.id)
        
        // si el producto ya existe...
        if (index != -1) {

            // obtengo los amount
            let oldAmount = cart[index].amount
            let newAmount = product.amount

            // actualizado el amount del producto
            product = {...product, amount:oldAmount + newAmount}

            // creo el carrito auxiliar
            let auxCart = cart

            // reemplazo en elemento del indice por el producto actualizado
            auxCart.splice(index, 1, product)

            // actualizo el contador de productos
            updateCart(auxCart)

        }
        
        // si el producto NO existe...
        else {
            // agrego el producto al carrito
            let auxCart = [...cart, product]

            // actualizo el contador de productos
            updateCart(auxCart)
        }

    }

    const removeFromCart = (id) => {
        // remuevo el elemento con la ID
        const auxCart = cart.filter(el => el.id != id)

        // actualizo el contador de productos
        updateCart(auxCart)
    }

    const clearCart = () => {
        // borro el carrito
        localStorage.removeItem("cart")
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, counter, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}