import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {formatPrice} from "../utils/helpers";

function Product({ image, name, price, id }) {
    return (
        <article className="w-full">
            <div className="relative bg-black rounded hover:opacity-50">
                <img src={image} alt={image} className="w-full block object-cover rounded transition-all h-56"/>
                <Link to={`/products/${id}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-color-primary
                flex items-center justify-center w-10 h-10 rounded-full opacity-0 cursor-pointer hover:opacity-100">
                    <FaSearch className="text-xl text-white"/>
                </Link>
            </div>
            <footer className="mt-4 flex justify-between items-center">
                <h5 className="capitalize">{name}</h5>
                <p className="text-[#AB7A5FFF] font-semibold">{formatPrice(price)}</p>
            </footer>
        </article>
    )
}

export default Product