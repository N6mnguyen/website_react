import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {FormData} from '../interface/product'
import { useParams } from 'react-router-dom'
import { GetProductByID } from '../services/product'
type Props = {
    onUpdate:(data:FormData,id:number|string) => void
}

const EditProduct = ({onUpdate}: Props) => {
    const {register,handleSubmit,reset}=useForm<FormData>()
    const param = useParams()
    useEffect(()=>{
        (async ()=>{
            const product = await GetProductByID(param?.id as number|string)
            reset({
                name: product.name,
                image: product.image,
                price: product.price,
                category: product.category
            })
        })()
    },[])
    const onSubmit = (data:FormData)=>{
        onUpdate(data,param?.id as number|string)
    }
  return (
    <>
        <h1 className='text-2xl font-bold '>Cập nhật sản phẩm</h1>
        <form className='flex flex-col py-12 w-[500px] mx-auto gap-4'onSubmit={handleSubmit(onSubmit)}>
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='text' {...register('name')} placeholder='Tên sản phẩm' />
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='text' {...register('image')} placeholder='Ảnh sản phẩm' />
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='number' {...register('price')} placeholder='Giá' />
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='text' {...register('category')} placeholder='Danh mục'/>
            <button className='py-3 bg-blue-800 text-white font-bold rounded-[20px] ' type='submit'>Cập nhật</button>
        </form>
    </>
  )
}

export default EditProduct