import React, {useState} from "react";
import {useProductsContext} from "../context/products_context";
import Logo from "../img/logo.png"
import {FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {links} from "../utils/constants";
import CartButtons from "./CartButtons";
import {useUserContext} from "../context/user_context";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext()
    const { myUser } = useUserContext()

    return (
        <div className="text-center">
            <aside className={`${isSidebarOpen ? 'fixed top-0 left-0 w-full h-full bg-white transition-transform z-[999]' : 
                'fixed top-0 left-0 w-full h-full bg-white transition-transform -z-10 hidden'}`}>
                <div className="flex justify-between items-center py-4 px-6">
                    <img src={Logo} alt="Logo" className="h-12"/>
                    <button className="text-3xl bg-transparent border-transparent text-[#AB7A5FFF] transition cursor-pointer mt-1"
                        onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="mb-8">
                    {links.map(({ id, text, url}) => {
                        return (
                            <li key={id}>
                                <Link to={url} className="block text-left text-base capitalize py-4 px-6 text-gray-600 transition"
                                      onClick={closeSidebar}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })}
                    {myUser && (
                        <li>
                            <Link to="/checkout" onClick={closeSidebar}>
                                checkout
                            </Link>
                        </li>
                    )}
                </ul>
                <CartButtons />
            </aside>
        </div>
    )
}

export default Sidebar