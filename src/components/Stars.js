import React from "react";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";

function Stars({ stars, reviews }) {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index} className="text-[#FFB900FF] text-base mr-1">
                {stars > number ? (
                    <BsStarFill />
                ) : stars > index ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        )
    })

    return (
        <div className="flex justify-start items-center mb-2">
            <div className="flex">{tempStars}</div>
            <p className="ml-2 mt-5">({reviews} customer reviews)</p>
        </div>
    )
}

export default Stars