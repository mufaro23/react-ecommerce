import React from "react";
import {formatPrice} from "../utils/helpers";
import {Link} from "react-router-dom";

function ListView({ products }) {
    return (
        <section className="grid gap-y-12">
            {products.map((product) => {
                const { id, image, name, price, description } = product
                return (
                    <article key={id} className="grid grid-cols-2 gap-x-8 items-center">
                        <img src={image} alt={image} className="w-80 h-52 block object-cover rounded mb-4"/>
                        <div>
                            <h4 className="mb-2 text-2xl capitalize font-bold">{name}</h4>
                            <h5 className="text-[#B99179FF] mb-3 font-bold">{formatPrice(price)}</h5>
                            <p className="mb-4">{description.substring(0, 150)}...</p>
                            <Link to={`/products/${id}`} className="text-xs py-1 px-2 uppercase bg-[#AB7A5FFF] text-white py-1.5 px-3
                                inline-block cursor-pointer shadow rounded border-transparent">
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default ListView