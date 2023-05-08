import React from "react";
import PageHero from "../components/PageHero";
import {useCartContext} from "../context/cart_context";
import {Link} from "react-router-dom";
import StripeCheckout from "../components/StripeCheckout";

function Checkout() {
    const { cart } = useCartContext()

    return (
        <main>
            <PageHero title="checkout" />
            <div className="flex items-center justify-center">
                {cart.length < 1 ? (
                    <div className="text-center">
                        <h2>Your cart is empty</h2>
                        <Link to="/products">
                            fill it
                        </Link>
                    </div>
                ) : (
                    <StripeCheckout />
                )}
            </div>
        </main>
    )
}

export default Checkout