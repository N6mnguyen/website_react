import React from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    products:IProduct[],
    deleteProduct:(id:number|string) => void
}

const ProductList = ({products,deleteProduct}: Props) => {
  return (
    <>  
<table>
    <thead>
    <tr className='flex gap-[220px] py-2 px-3 text-white bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1] rounded-[18px] text-[12px]'>
        <th>STT</th>
        <th>Ảnh</th>
        <th>Tên SP</th>
        <th>Giá tiền</th>
        <th>Danh Muc</th>
        <th>Thao tác</th>
    </tr>
    </thead>
    <tbody>
        {products.map((product,index:number)=>(
            <tr className='flex item-center justify-between py-3 px-4-=- ' key={product.id}>
                <td>{index+1}</td>
                <td><img width={90} src={product.image}/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                <div className='flex gap-2'>
                    <div className='w-10 h-8 bg-blue-800 text-white rounded-[12px] text-center py-0.5'>  <Link to={`/dashboard/product/edit/${product.id}`} className=''>Sửa</Link></div>
                    <button className='w-10 h-8 bg-[green] text-white rounded-[12px] text-center py-0.5' onClick={()=>deleteProduct(product.id)}>Xóa</button>
                </div>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
    </>
  )
}

export default ProductList