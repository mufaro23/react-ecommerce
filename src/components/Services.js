import React from "react";
import { services } from "../utils/constants";

function Services() {
    return (
        <section className="py-20 bg-[#EADED7FF]">
            <div className="w-4/5 m-auto">
                <article className="lg:grid lg:grid-cols-2">
                    <h3 className="capitalize mb-3 text-base">custom furniture <br/> built only for you</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum debitis consectetur reprehenderit non aliquam voluptates
                        dolore aut vero consequuntur.
                    </p>
                </article>
                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const { id, icon, title, text } = service
                        return (
                            <article key={id} className="bg-[#C5A491FF] text-center py-10 px-8 rounded">
                                <span className="w-16 h-16 grid m-auto place-items-center mb-4 rounded-full bg-[#EADED7FF] text-[#453227FF] text-3xl">
                                    {icon}
                                </span>
                                <h4 className="text-[#453227FF] capitalize text-2xl font-bold">{title}</h4>
                                <p className="text-[#795744FF] text-base">{text}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services