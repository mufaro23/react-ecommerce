import React, {useState} from "react"
import {Link} from "react-router-dom";
import {FaShoppingCart, FaUserMinus, FaUserPlus} from "react-icons/fa";
import {useUserContext} from "../context/user_context";
import {useCartContext} from "../context/cart_context";

const CartButtons = () => {

    const { total_items, clearCart } = useCartContext()
    const { loginWithRedirect, myUser, logout } = useUserContext()

    return (
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:w-56">
            <Link to="/cart" className="text-gray-800 text-gray-800 text-2xl flex items-center">
                Cart
                <span className="flex items-center relative">
                    <FaShoppingCart className="h-6 ml-1.5"/>
                    <span className="absolute -top-2.5 -right-4 bg-color-primary w-4 h-4 flex items-center justify-center rounded-full text-white p-3 text-xs">
                        {total_items}
                    </span>
                </span>
            </Link>
            {myUser ? (
                <button type="button" className="flex items-center bg-transparent border-transparent cursor-pointer text-gray-800 text-2xl"
                        onClick={() => {
                            clearCart();
                            localStorage.removeItem("user");
                            logout({ returnTo: window.location.origin });
                        }}>
                    Logout <FaUserMinus className="h-6 ml-1.5" />
                </button>
            ) : (
                <button type="button" className="flex items-center bg-transparent border-transparent cursor-pointer text-gray-800 text-2xl" onClick={loginWithRedirect}>
                    Login <FaUserPlus className="h-6 ml-1.5" />
                </button>
            )}
        </div>
    )
}

export default CartButtons