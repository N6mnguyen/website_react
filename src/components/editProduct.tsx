import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {FormData} from '../interface/product'
import { useParams } from 'react-router-dom'
import { GetProductByID } from '../services/product'
import { ICategory } from '../interface/category'
import api from '../config/axios'
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
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get('categorys'); // Corrected the endpoint to 'categories'
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        })();
    }, []);
  return (
    <>
        <h1 className='text-2xl font-bold '>Cập nhật sản phẩm</h1>
        <form className='flex flex-col py-12 w-[500px] mx-auto gap-4'onSubmit={handleSubmit(onSubmit)}>
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='text' {...register('name')} placeholder='Tên sản phẩm' required />
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='text' {...register('image')} placeholder='Ảnh sản phẩm'  required/>
            <input className='py-2 px-2 border border-2 rounded-[20px]' type='number' {...register('price')} placeholder='Giá'required />
            <select className='py-2 px-2 border-2 rounded-[20px]' {...register("category")}>
                    {categories.map((category) => (
                        <option key={category.id}>{category.name}</option>
                    ))}
                </select>
            
            <button className='py-3 bg-[#4E7C32] text-white font-bold rounded-[20px] ' type='submit'>Cập nhật</button>
        </form>
    </>
  )
}

export default EditProduct