import React from "react";
import PageHero from "../components/PageHero";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

function Products() {
    return (
        <main>
            <PageHero title="products" />
            <div className="">
                <div className="w-4/5 m-auto grid gap-y-12 gap-x-6 my-12 mx-auto md:grid-cols-3">
                    <Filters />
                    <div className="col-span-2">
                        <Sort />
                        <ProductList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products