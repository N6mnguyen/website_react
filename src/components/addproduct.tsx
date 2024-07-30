import React, { useEffect, useState } from 'react';
import { FormData } from '../interface/product';
import { useForm } from 'react-hook-form';
import api from '../config/axios';

type Props = {
    onAdd: (data: FormData) => void;
};

type ICategory = {
    id: number | string;
    name: string;
};

const AddProduct = ({ onAdd }: Props) => {
    const { register, handleSubmit } = useForm<FormData>();
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

    const onSubmit = (data: FormData) => {
        onAdd(data);
    };

    return (
        <>
        <div className="">
            <h1 className='text-2xl font-bold '>Thêm mới sản phẩm</h1>
            <form className='flex flex-col py-12 w-[500px] mx-auto gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2 px-2 border border-2 rounded-[20px]' type='text' {...register('name')} placeholder='Tên sản phẩm' required />
                <input className='py-2 px-2 border-2 rounded-[20px]' type='text' {...register('image')} placeholder='Ảnh sản phẩm' />
                <input className='py-2 px-2 border-2 rounded-[20px]' type='number' {...register('price')} placeholder='Giá' />
                <select className='py-2 px-2 border-2 rounded-[20px]' {...register("category")}>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button className='py-3 bg-blue-800 text-white font-bold rounded-[20px] ' type='submit'>Thêm mới</button>
            </form>
        </div>
        </>
    );
};

export default AddProduct;
