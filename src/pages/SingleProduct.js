import React, {useEffect} from "react"
import {Link, useParams, useNavigate} from "react-router-dom";
import {useProductsContext} from "../context/products_context";
import {single_product_url as url } from "../utils/constants"
import Loading from "../components/Loading";
import Error from "../components/Error";
import PageHero from "../components/PageHero";
import ProductImage from "../components/ProductImage";
import Stars from "../components/Stars";
import {formatPrice} from "../utils/helpers";
import AddToCart from "../components/AddToCart";

function SingleProduct() {
    const { id } = useParams()
    const history = useNavigate()
    const {
        single_product_loading: loading,
        single_product_error: error,
        single_product: product,
        fetchSingleProduct,
    } = useProductsContext()

    useEffect(() => {
        alert(id)
        fetchSingleProduct(`${url}${id}`)
        console.log(id)
    }, [id])

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history("/")
            }, 3000)
        }
    }, [error])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const {name, price, description, stock, stars, reviews, id: sku, company, images} = product

    return (
        <main>
            <PageHero title={name} product />
            <div className="py-20 w-4/5 my-0 mx-auto">
                <Link to="/products" className="uppercase bg-color-primary text-[#EADED7FF] py-1.5 px-3 inline-block text-base cursor-pointer shadow rounded-lg border-transparent">
                    back to products
                </Link>
                <div className="grid gap-16 mt-8 lg:grid-cols-2 items-center">
                    <ProductImage images={images} />
                    <section className="">
                        <h2 className="font-bold">{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className="text-[#AB7A5FFF] font-bold">{formatPrice(price)}</h5>
                        <p className="leading-loose">{description}</p>
                        <p className="capitalize w-72 grid grid-cols-3fr">
                            <span className="font-semibold">Available : </span>
                            {stock > 0 ? "In stock" : "Out of stock"}
                        </p>
                        <p className="capitalize w-72 grid grid-cols-3fr">
                            <span className="font-semibold">SKU :</span>
                            {sku}
                        </p>
                        <p className="capitalize w-72 grid grid-cols-3fr">
                            <span className="font-semibold">Brand :</span>
                            {company}
                        </p>
                        <hr/>
                        {stock > 0 && <AddToCart product={product} /> }
                    </section>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct