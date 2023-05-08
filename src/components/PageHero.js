import React from "react";
import {Link} from "react-router-dom";

function PageHero({ title, product }) {
    return (
        <section className="bg-[#EADED7FF] w-full flex items-center text-[#453227FF]">
            <div className="w-4/5 m-auto py-4">
                <h3 className="capitalize mb-3 text-4xl font-semibold">
                    <Link to="/" className="text-[#795744FF] hover:text-[#453227FF]">Home </Link>
                    {product && <Link to="/products">/ Products</Link>}/ {title}
                </h3>
            </div>
        </section>
    )
}

export default PageHero