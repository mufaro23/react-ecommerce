import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../img/logo.png"
import {FaBars} from "react-icons/fa";
import {links} from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import {useUserContext} from "../context/user_context";


function Header() {
    const { openSidebar } = useProductsContext()
    const { myUser } = useUserContext()

    return (
        <nav className="h-20 flex items-center justify-center z-10">
            <div className="w-4/5 m-auto flex justify-between">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt="Logo" className="w-14 -ml-3.5"/>
                        <p className="hidden text-2xl font-bold ml-4 md:block">OnlyDev</p>
                    </Link>
                    <button type="button" className="bg-transparent border-transparent cursor-pointer lg:hidden"
                            onClick={openSidebar}>
                        <FaBars className="text-3xl text-[#AB7A5FFF]"/>
                    </button>
                </div>
                <ul className="hidden lg:flex lg:justify-center">
                    {links.map((link) => {
                        const {id, text, url} = link
                        return (
                            <li key={id} className="mx-2 my-auto">
                                <Link to={url} className="capitalize text-base hover:border-b-1 hover:border-[#C5A491FF]">{text}</Link>
                            </li>
                        )
                    })}
                    {myUser && (
                        <li>
                            <Link to="/checkout">checkout</Link>
                        </li>
                    )}
                </ul>
                <CartButtons className="hidden lg:flex"/>

            </div>

        </nav>
    )
}

export default Header