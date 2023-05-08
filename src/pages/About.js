import React from "react";
import PageHero from "../components/PageHero";
import aboutImg from "../img/hero-bcg.jpeg"

function About() {
    return (
        <main>
            <PageHero title="about" />
            <section className="py-20 w-4/5 m-auto grid gap-16 grid-cols-2">
                <img src={aboutImg} alt="About Image" className="w-full block rounded h-[500px] object-cover"/>
                <article>
                    <div className="text-left">
                        <h2 className="text-5xl font-bold capitalize mb-3">our story</h2>
                        <div className="w-24 h-1 bg-color-primary"></div>
                    </div>
                    <p className="mt-8 text-[#617D98FF]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                        accusantium sapiente tempora sed dolore esse deserunt eaque
                        excepturi, delectus error accusamus vel eligendi, omnis beatae.
                        Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                        dolore, obcaecati incidunt sequi blanditiis est exercitationem
                        molestiae delectus saepe odio eligendi modi porro eaque in libero
                        minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                        ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                        similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                        iste.
                    </p>
                </article>
            </section>
        </main>
    )
}

export default About