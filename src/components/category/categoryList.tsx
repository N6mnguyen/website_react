import React from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../../interface/category'

type Props = {
    categorys:ICategory[],
    categoryDelete:(id:number|string) => void
}

const CategoryList = ({categorys,categoryDelete}: Props) => {
  return (
    <>  
<table className='justify-between my-4'>
    <thead>
    <tr className='flex gap-[140px] py-2 border border-2 px-4 text-white bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1] rounded-[18px]'>
        <th>STT</th>
        <th>Tên </th>
        <th className='mx-20'>Ảnh </th>
        <th>ItemCount </th>
        <th className='mx-4'>Thao tác</th>
    </tr>
    </thead>
    <tbody>
        {categorys.map((category,index:number)=>(
            <tr className='flex mx-auto justify-between py-3 px-4 ' key={category.id}>
                <td>{index+1}</td>
                <td className='mx-[50px]'>{category.name}</td>
                <td className='mx-[50px]'>{category.image}</td>
                <td className='mx-[50px]'>{category.itemCount}</td>
                <td>
                <div className='flex gap-2'>
                    <div className='w-10 h-8 bg-blue-800 text-white rounded-[12px] text-center py-0.6'>  <Link to={`/dashboard/category/edit/${category.id}`} className=''>Sửa</Link></div>
                    <button className='w-10 h-8 bg-[green] text-white rounded-[12px] text-center py-0.5' onClick={()=>categoryDelete(category.id)}>Xóa</button>
                </div>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
    </>
  )
}

export default CategoryList