import React from "react";
import {useCartContext} from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import {FaTrash} from "react-icons/fa";

function CartItem({ id, image, name, color, price, amount }) {
    const {removeItem, toggleAmount} = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }

    return (
        <article className="grid grid-cols-2fr grid-rows-[75px] gap-y-12 gap-x-4 mb-12 items-center">
            <div className="text-center">
                <img src={image} alt={name} className="w-full h-full block rounded object-cover"/>
                <div>
                    <h5 className="text-xs">{name}</h5>
                    <p className="text-[#617D98FF] capitalize flex items-center justify-start">
                        color : <span style={{ background: color }} />
                    </p>
                    <h5 className="text-[#AB7A5FFF]">{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className="hidden md:block md:text-base md:text-[#AB7A5FFF]">
                {formatPrice(price)}
            </h5>
            <AmountButtons amount={amount} increase={increase()} decrease={decrease()} />
            <h5 className="hidden md:block md:text-[#617D98FF] md:text-base">{formatPrice(price * amount)}</h5>
            <button className="text-white bg-[#BB2525FF] border-transparent w-6 h-6 flex items-center justify-center rounded text-xs cursor-pointer"
                onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </article>
    )
}

export default CartItem