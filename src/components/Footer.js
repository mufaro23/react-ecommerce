import React from "react";
import {AiOutlineCopyright} from "react-icons/ai";

function Footer() {
    return (
        <footer className="h-20 bg-black text-center text-white">
            <div className="flex justify-center items-center pt-6">
                <h5 className="flex items-center">
                    <span className="text-[#AB7A5FFF] font-semibold">OnlyDev</span>
                    <AiOutlineCopyright className="mx-1"/>
                    {new Date().getFullYear()}.
                </h5>
                <h5 className="ml-1">All rights reserved</h5>
            </div>

        </footer>
    )
}

export default Footer