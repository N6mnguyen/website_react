import React from 'react'
import { IProduct } from '../../interface/product'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <div>
        <div className='w-full h-[300px] overflow-hidden'>
            <img className='object-cover' src={product.image}/>
        </div>
        <h3 className='text-[14px] font-semibold'>{product.name}</h3>
        <div className='flex justify-between'>
        <span className='text-[#777777]'>{product.category}</span>
        <span className='text-[#665345]'>{product.price}</span>
        </div> 
    </div>
  )
}

export default ProductItem