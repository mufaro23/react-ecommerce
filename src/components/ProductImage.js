import React, {useState} from "react";

function ProductImage({ images = [[]] }) {
    const [main, setMain] = useState(images[0])

    return (
        <section>
            <img src={main.url} alt="" className="w-full h-80 block rounded object-cover md:h-500"/>
            <div className="mt-4 grid grid-cols-5 gap-x-4">
                {images.map((image, index) => {
                    return (
                        <img src={image.url} alt="" key={index} className={`h-24 cursor-pointer ${image.url === main.url ? 
                            'border-1 border-solid bg-[#AB7A5FFF]' : null}`} onClick={() => setMain(images[index])}/>
                    )
                })}
            </div>
        </section>
    )
}

export default ProductImage