import React from "react";

function CartColumns() {
    return (
        <div className="hidden md:block">
            <div className="grid justify-center gap-x-4 grid-cols-1fr">
                <h5 className="text-[#617D98FF]">item</h5>
                <h5 className="text-[#617D98FF]">price</h5>
                <h5 className="text-[#617D98FF]">quantity</h5>
                <h5 className="text-[#617D98FF]">subtotal</h5>
                <span className="w-8 h-8"></span>
                <hr className="mt-4 mb-12"/>
            </div>
        </div>
    )
}

export default CartColumns