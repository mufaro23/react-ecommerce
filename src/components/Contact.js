import React from "react";

function Contact() {
    return (
        <section className="py-20">
            <div className="w-4/5 m-auto">
                <h3>Join our newsletter and get 20% off</h3>
                <div className="grid grid-cols-2 items-center gap-32 mt-8">
                    <p className="text-[#617D98FF]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                        sint unde quaerat ratione soluta veniam provident adipisci cumque
                        eveniet tempore?
                    </p>
                    <form className="w-full">
                        <input type="email" className="text-base py-2 px-4 border-2 border-solid border-black border-r-0
                            text-[#324D67FF] rounded-l" placeholder="Enter email"/>
                        <button type="submit" className="py-2 py-4 border-2 border-solid border-black text-base rounded-r bg-color-primary capitalize cursor-pointer text-black">
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact