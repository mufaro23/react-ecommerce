import React, {useState} from "react"
import {Link} from "react-router-dom";
import heroBackground from "../img/hero-bcg.jpeg"
import heroBackground2 from "../img/hero-bcg-2.jpeg"

function Hero() {
    const [myUser, setMyUser] = useState()

    return (
        <section className="grid place-items-center py-20 lg:grid-cols-2 lg:gap-32">
            <article className="w-4/5 lg:py-10 lg:pl-10">
                {myUser && (
                    <h1 className="text-[#ab7a5f] lg:mb-8">
                        Welcome, {" "}
                        <span>
                            {myUser?.name}
                        </span>
                        !
                    </h1>
                )}
                <h1 className="mb-8 text-4xl font-bold capitalize">
                    design your <br/>
                    comfort zone
                </h1>
                <p className="mb-8 text-base text-[#617D98FF] lg:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                    sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                    aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                    alias?
                </p>
                <Link to="/products" className="py-3 px-6 uppercase bg-color-primary text-[#EADED7FF] py-1.5 px-3
                 inline-block text-sm cursor-pointer shadow rounded">
                    shop now
                </Link>
            </article>
            <article className="hidden lg:block lg:img-container">
                <img src={heroBackground} alt="nice table" className="main-img" />
                <img src={heroBackground2} alt="person working" className="accent-img" />
            </article>
        </section>
    )
}

export default Hero