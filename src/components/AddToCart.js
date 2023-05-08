import React, {useState} from "react";
import {useCartContext} from "../context/cart_context";
import {FaCheck} from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import {Link} from "react-router-dom";

function AddToCart({ product }) {
    const {addToCart} = useCartContext()
    const { id, stock, colors } = product
    const [mainColor, setMainColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }

    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }

    return (
        <section className="mt-8">
            <div className="grid grid-cols-3fr items-center mb-4">
                <span className="capitalize font-bold">colors :</span>
                <div className="flex">
                    {colors.map((color, index) => {
                        return (
                            <button key={index} style={{ background: color }}
                                    className={`${mainColor === color ? 
                                        'inline-block w-6 h-6 rounded-full bg-[#222222] mr-2 border-none cursor-pointer flex items-center justify-center opacity-100' : 
                                        'inline-block w-6 h-6 rounded-full bg-[#222222] mr-2 border-none cursor-pointer flex items-center justify-center opacity-50'}`}
                                onClick={() => setMainColor(color)}>
                                {mainColor === color ? <FaCheck className="text-white text-xs"/> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="mt-8">
                <AmountButtons increase={increase} decrease={decrease} amount={amount} />
                <Link to="/cart" onClick={() => addToCart(id, mainColor, amount, product)}
                      className="mt-4 w-36 uppercase bg-color-primary text-[#EADED7FF] py-1.5 px-3 inline-block font-semibold text-base cursor-pointer shadow rounded-lg border-transparent">
                    add to cart
                </Link>
            </div>
        </section>
    )
}

export default AddToCart