import React from "react";
import Product from "./Product";

function GridView({ products }) {
    return (
        <section>
            <div className="grid gap-y-8 gap-x-6 grid-cols-3">
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
        </section>
    )
}

export default GridView