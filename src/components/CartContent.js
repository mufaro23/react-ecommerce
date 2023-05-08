import React from "react";
import {useCartContext} from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import CartTotals from "./CartTotals";

function CartContent() {
    const { cart, clearCart } = useCartContext()

    return (
        <section className="py-20 w-4/5 m-auto">
            <CartColumns />
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <hr/>
            <div className="flex justify-between mt-8">
                <Link to="/products" className="bg-transparent border-transparent capitalize py-1 px-2 bg-[#AB7A5FFF] text-white rounded cursor-pointer">
                    continue shopping
                </Link>
                <button type="button" className="bg-transparent border-transparent capitalize py-1 px-2 bg-black text-white rounded cursor-pointer"
                    onClick={clearCart}>
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </section>
    )
}

export default CartContent