import React from "react";
import {useFilterContext} from "../context/filter_context";
import {BsFillGridFill, BsList} from "react-icons/bs";

function Sort() {
    const { filtered_products: products, grid_view, setGridView, setListView, sort, updateSort } = useFilterContext()

    return (
        <section className="grid grid-cols-auto items-center mb-8 gap-x-8">
            <div className="grid grid-cols-2 gap-x-2">
                <button onClick={setGridView} className={`bg-transparent border-1 border-solid border-black w-6 rounded h-6 flex items-center justify-center cursor-pointer 
                    ${grid_view ? 'bg-black text-white' : "text-black" }`}>
                    <BsFillGridFill className="text-base"/>
                </button>
                <button onClick={setListView} className={`bg-transparent border-1 border-solid border-black w-6 rounded h-6 flex items-center justify-center cursor-pointer 
                    ${!grid_view ? 'bg-black text-white' : "text-black" }`}>
                    <BsList className="text-base" />
                </button>
            </div>
            <p className="capitalize text-[#324D67FF]">{products.left} products found</p>
            <hr className="bg-[#BCCCDCFF]"/>
            <form action="">
                <label htmlFor="sort" className="text-base capitalize">sort by</label>
                <select name="sort" id="sort" value={sort} onChange={updateSort} className="border-transparent text-base capitalize py-1 px-2">
                    <option value="price-lowest">Price (lowest)</option>
                    <option value="price-highest">Price (highest)</option>
                    <option value="name-a">name (a - z)</option>
                    <option value="name-z">name (z - a)</option>
                </select>
            </form>
        </section>
    )
}

export default Sort