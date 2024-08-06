import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { GetCategoryByID } from '../../services/category'
import { FormCate } from '../../interface/category'
type Props = {
    update:(data: FormCate,id:number|string) => void
}
const CategoryEdit = ({update}: Props) => {
    const {register,handleSubmit,reset}=useForm<FormCate>()
    const param = useParams()
    useEffect(()=>{
        (async ()=>{
            const category = await GetCategoryByID(param?.id as number|string)
            reset({
                name: category.name,
                image: category.image,
                itemCount: category.itemCount,
            })
        })()
    },[])
    
    const onSubmit = (data:FormCate)=>{
        update(data,param?.id as number|string)
    }
  return (
    <>
        <h1 className='text-2xl font-bold '>Cập nhật sản phẩm</h1>
        <form className='flex flex-col py-12 w-[500px] mx-auto gap-4'onSubmit={handleSubmit(onSubmit)}>
            <input className='py-2 px-4 border border-2 rounded-[20px]' type='text' {...register('name')} placeholder='Tên sản phẩm' required/>
            <input className='py-2 px-4 border border-2 rounded-[20px]' type='text' {...register('image')} placeholder='Ảnh sản phẩm' required />
            <input className='py-2 px-4 border border-2 rounded-[20px]' type='text' {...register('itemCount')} placeholder='Số lượng sản phẩm' required />
            <button className='py-2 bg-[#4E7C32] text-white font-bold rounded-[20px] ' type='submit'>Cập nhật</button>
        </form>
    </>
  )
}

export default CategoryEdit