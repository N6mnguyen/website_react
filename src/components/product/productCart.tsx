import React from 'react'
import { IProduct } from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <>
    <div className="bg-white p-8 rounded-lg  flex flex-col lg:flex-row py-[108px]">
                <img className="w-[355px] h-[355px] mx-auto"  src={product.image}/>
                <div className="mt-4 flex justify-center space-x-4">
                    <img className="w-[106px] h-[106px] border" src={product.image}/>
                    <img className="w-[106px] h-[106px] border" src={product.image}/>
                    <img className="w-[106px] h-[106px] border"  src={product.image}/>
                </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0 px-[60px]">
                <span className="text-[#4E7C32] uppercase tracking-wider font-bold">Plant</span>
                <h1 className="text-[44px] font-bold mt-2">{product.name}</h1>
                <p className="text-[#68707D] mt-4 text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <div className="mt-6 flex flex-col">
                  <div>
                    <span className="text-[30px] font-bold">{product.price}</span>
                    <span className="text-[#505F4E] ml-4 text-[16px] font-bold border border-1 rounded-[5px] bg-[#FFEDE0] w-[51.21px] h-[28.67px]">50%</span>
                  </div>
                    <span className="line-through text-[16px] font-bold">$250.00</span>
                </div>
                <div className="flex items-center mt-6 ">
                    <button className="bg-[#F7F8FD] px-4 py-2 rounded-l-lg">-</button>
                      <input type="number" value="3" className="text-center w-16 bg-[#F7F8FD] py-2"/>
                    <button className="bg-[#F7F8FD] px-4 py-2 rounded-r-lg">+</button>
                    <button className="bg-[#4E7C32] text-white px-6 py-2 ml-4 rounded-lg w-[273px] h-[54px] flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                     <p>Add to cart</p>
                    </button>
                </div>
            </div>
    </>
  )
}

export default ProductItem