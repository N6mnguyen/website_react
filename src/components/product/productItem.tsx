import React from 'react'
import { IProduct } from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <div>
        <div className='w-full h-[300px] overflow-hidden'>
        <Link to={`/detail/${product.id}`} className=''> <img className='object-cover' src={product.image}/></Link>
        </div>
        <h3 className='text-[16.92px] font-bold' style={{ fontFamily: 'Inter' }}>{product.name}</h3>
        <div className='flex justify-between'>
        <span className='text-[#777777]'>{product.category}</span>
        <span className='text-[#665345]'>{product.price}</span>
        </div> 
    </div>
  )
}

export default ProductItem