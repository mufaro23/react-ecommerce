import React, {useState} from "react";
import {formatPrice} from "../utils/helpers";
import {useCartContext} from "../context/cart_context";
import {Link} from "react-router-dom";

function CartTotals() {
    const { total_amount, shipping_fee } = useCartContext()
    const [ myUser, setMyUser ] = useState("")
    return (
        <section className="mt-12 flex justify-center">
            <div>
                <article>
                    <h5>subtotal : <span>{formatPrice(total_amount)}</span></h5>
                    <p>shipping fee : <span>{formatPrice(shipping_fee)}</span></p>
                    <hr/>
                    <h4>order total : <span>{formatPrice(total_amount + shipping_fee)}</span></h4>
                </article>
                {myUser ? (
                    <Link to="/checkout" className="uppercase bg-[#AB7A5FFF] text-white py-1.5 px-3 inline-block text-xs cursor-pointer shadow rounded border-transparent">
                        proceed to checkout
                    </Link>
                ) : (
                    <button onClick={() => {}} className="uppercase bg-[#AB7A5FFF] text-white py-1.5 px-3 inline-block text-xs cursor-pointer shadow rounded border-transparent">
                        login
                    </button>
                )}
            </div>
        </section>
    )
}

export default CartTotals