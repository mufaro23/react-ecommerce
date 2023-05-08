import React from "react";
import {useCartContext} from "../context/cart_context";
import {Link} from "react-router-dom";
import PageHero from "../components/PageHero";
import CartContent from "../components/CartContent";

function Cart() {
    const { cart } = useCartContext()

    if (cart.length < 1) {
        return (
            <main className="py-20">
                <div className="text-center">
                    <h2 className="mb-4">Your cart is empty</h2>
                    <Link to="/products" className="uppercase bg-[#AB7A5FFF] text-white py-1.5 px-3 inline-block text-xs cursor-pointer shadow rounded border-transparent">
                        fill it
                    </Link>
                </div>
            </main>
        )
    }
    return (
        <main>
            <PageHero title="cart" />
            <main>
                <CartContent></CartContent>
            </main>
        </main>
    )
}

export default Cart