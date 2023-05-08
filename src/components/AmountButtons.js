import React from "react";
import {FaMinus, FaPlus} from "react-icons/fa";

function AmountButtons({ increase, decrease, amount }) {
    return (
        <div className="grid w-36 justify-center grid-cols-3 items-center">
            <button type="button" className="bg-transparent border-transparent cursor-pointer py-4 w-8 h-4 flex items-center justify-center">
                <FaMinus />
            </button>
            <h2 className="text-4xl font-bold">{amount}</h2>
            <button type="button" className="bg-transparent border-transparent cursor-pointer py-4 w-8 h-4 flex items-center justify-center">
                <FaPlus />
            </button>
        </div>
    )
}

export default AmountButtons