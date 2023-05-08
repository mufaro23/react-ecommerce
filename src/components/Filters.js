import React from "react";
import {useFilterContext} from "../context/filter_context";
import {formatPrice, getUniqueValues} from "../utils/helpers";
import {FaCheck} from "react-icons/fa";

function Filters() {
    const {
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            price,
            max_price,
            shipping,
        },
        updateFilters,
        all_products,
        clearFilters,
    } = useFilterContext()

    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'colors')

    return (
        <section>
            <div className="md:sticky md:top-4">
                <form action="">
                    {/*search input*/}
                    <div className="mb-5">
                        <input type="text" name="text" value={text} placeholder="search" onChange={updateFilters}
                               className="p-2 bg-[#F1F5F8FF] rounded border-transparent placeholder:capitalize"/>
                    </div>
                    {/*end of search input*/}
                    {/*category*/}
                    <div className="mb-5">
                        <h5 className="mb-2 text-base capitalize font-bold">category</h5>
                        <div>
                            {categories.map((c, index) => {
                                return (
                                    <button key={index} onClick={updateFilters} type="button" name="category"
                                            className={`block my-1 py-1 capitalize bg-transparent border-none border-b-1 
                                                border-solid border-b-transparent text-[#617D98FF] cursor-pointer ${category === c.toLowerCase() ? 'border-[#617D98FF]' : null }`}>
                                        {c}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    {/*end of category*/}
                    {/*company*/}
                    <div className="mb-5">
                        <h5 className="mb-2 text-base capitalize font-bold">company</h5>
                        <select name="company" value={company} onChange={updateFilters}
                                className="bg-[#F1F5F8FF] rounded border-transparent p-1">
                            {companies.map((c, index) => {
                                return (
                                    <option value={c} key={index}>
                                        {c}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    {/*end of company*/}
                    {/*colors*/}
                    <div className="mb-5">
                        <h5 className="mb-2 text-base capitalize font-bold">colors</h5>
                        <div className="flex items-center">
                            {colors.map((c, index) => {
                                if (c === 'all') {
                                    return (
                                        <button key={index} name='color' onClick={updateFilters} data-color='all'
                                                className={`block my-1 py-1 bg-transparent border-none border-b-1 border-solid 
                                                    border-b-transparent text-[#617D98FF] cursor-pointer capitalize ${color === 'all' ? 'flex items-center justify-center mr-2 opacity-100 underline' : 'flex items-center justify-center mr-2 opacity-50 '}`}>
                                            all
                                        </button>
                                    )
                                }
                                return (
                                    <button key={index} name='color' style={{ background: c }}
                                            className={`${color === c ? 'inline-block w-4 h-4 rounded-full bg-[#222222] mr-2 ' +
                                                'border-none cursor-pointer opacity-50 flex items-center justify-center  active' : 'inline-block w-4 h-4 rounded-full bg-[#222222] mr-2 ' +
                                                'border-none cursor-pointer opacity-50 flex items-center justify-center text-xs'}`}>
                                        {color === c ? <FaCheck className="text-white"/> : null}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    {/*end of colors*/}
                    {/*price*/}
                    <div className="mb-5">
                        <h5 className="mb-2 text-base capitalize font-bold">price</h5>
                        <p className="mb-1">{formatPrice(price)}</p>
                        <input type="range" name="price" onChange={updateFilters} min={min_price} max={max_price} value={price} />
                    </div>
                    {/*end of price*/}
                    {/*shipping*/}
                    <div className="mb-5 grid items-center capitalize gap-y-2 text-base">
                        <label htmlFor="shipping">free shipping</label>
                        <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />
                    </div>
                    {/*end of shipping*/}
                </form>
                <button type="button" className="bg-[#BB2525FF] text-white py-1 px-2 rounded capitalize" onClick={clearFilters}>
                    clear filters
                </button>
            </div>
        </section>
    )
}

export default Filters