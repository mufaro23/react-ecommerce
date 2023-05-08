import React from "react";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <main className="py-20 px-0 flex justify-center items-center text-center">
            <section>
                <h1 className="text-6xl">404</h1>
                <h3 className="mb-8">Sorry, the page you tried cannot be found</h3>
                <Link to="/" className="uppercase bg-color-primary text-[#EADED7FF] py-1.5 px-3 inline-block text-base cursor-pointer shadow rounded-lg border-transparent">
                    back home
                </Link>
            </section>
        </main>
    )
}

export default ErrorPage