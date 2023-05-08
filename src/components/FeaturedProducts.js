import React from "react";
import {useProductsContext} from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
import {Link} from "react-router-dom";

const FeaturedProducts = () => {
    const {products_loading: loading, products_error: error, featured_products: featured} = useProductsContext()

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }
    return (
        <section className="bg-[#F1F5F8FF] py-20">
            <div className="text-center">
                <p className="capitalize text-4xl font-bold">featured products</p>
                <div className="w-24 h-1 bg-color-primary mx-auto"></div>
            </div>
            <div className="w-4/5 my-16 mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3">
                {featured.slice(0, 3).map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
            <Link to="/products" className="block w-36 m-auto text-center uppercase bg-color-primary text-white py-1.5 px-3
                transition-all text-sm cursor-pointer shadow rounded border-transparent">
                all products
            </Link>
        </section>
    )
}

export default FeaturedProducts