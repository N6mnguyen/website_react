
import { FormCate } from '../../interface/category';
import { useForm } from 'react-hook-form';


type Props = {
    add: (data: FormCate) => void;
};
const AddProduct = ({ add }: Props) => {
    const { register, handleSubmit } = useForm<FormCate>();
    const onSubmit = (data: FormCate) => {
        add(data);
    };
    return (
        <>
        <div className="">
            <h1 className='text-2xl font-bold '>Thêm mới sản phẩm</h1>
            <form className='flex flex-col py-12 w-[500px] mx-auto gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2 px-4 border border-2 rounded-[20px]' type='text' {...register('name')} placeholder='Tên' />
                <button className='py-2 bg-blue-800 text-white font-bold rounded-[20px] ' type='submit'>Thêm mới</button>
            </form>
        </div>
        </>
    );
};

export default AddProduct;
