import React, { useEffect, useState } from 'react';
import { IProduct } from '../interface/product';
import ProductItem from './product/productItem';
import { ICategory } from '../interface/category';
import api from '../config/axios';

type Props = {
  products: IProduct[]
}

const Home = ({ products }: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('categorys');
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const images = [
    {
      src: "/src/assets/anh1.png",
      alt: "Xẻng làm vườn",
      label: "Xẻng làm vườn",
    },
    { src: "/src/assets/anh2.png", alt: "Cát", label: "Cát" },
    { src: "/src/assets/anh3.png", alt: "Người trồng cây", label: "Người trồng cây" },
    {
      src: "/src/assets/anh4.png",
      alt: "Bánh bùn",
      label: "Bánh bùn",
    },
    { src: "/src/assets/anh5.png", alt: "Kẹp", label: "Kẹp" },
  ];
  // Chỉ lấy 4 sản phẩm đầu tiên
  const displayProducts = products.slice(0, 4);

  return (
    <>
      <div className="bg-gradient-to-r from-[#B5DCB0] to-[#FFEDE0] flex items-center justify-center">
        <div className="relative w-full">
          <img
            src="/src/assets/banner.png"
            alt="Plant in a pot"
            className="w-full rounded"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center p-10">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold mb-4 px-20 text-[#505F4E]">
              Chúng tôi chăm sóc khu vườn đẹp và ngôi nhà của bạn.
              </h1>
              <p className="text-gray-600 mb-4 px-20 text-[#505F4E]">
              Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Ipsum đã là văn bản mẫu chuẩn của ngành từ những năm 1500.
              </p>
              <div className='px-20'>
                <button className="w-[216px] h-[59px] border-stone-400 mb-4 border-[3px] text-[#505F4E] rounded" style={{ fontFamily: 'Poppins' }}>Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#F8F4F0] to-[#F8F4F0]'>
        <h2 className='text-[30px] font-bold text-[#505F4E] pt-5 px-[150px]'>Sản phẩm bán chạy</h2>
        <div className='bg-white h-[429px]'>
          <div className='grid grid-cols-4 mx-auto px-[150px] gap-[150px] py-[70px]'>
            {displayProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <div className='mx-auto flex gap-2 px-[250px] py-14'>
          <div className="">
        <div className="grid  grid-cols-5 gap-4">
          <div className="col-span-2 bg-red-500 relative">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-fill"
            />
            <div className="absolute top-6 p-4 w-full left-0 bg-white bg-opacity-70 font-semibold text-[25px] text-black ">
              {images[0].label}
            </div>
          </div>

          <div className="col-span-3 grid grid-cols-2 gap-4">
            {images.slice(1).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 p-4 w-full left-0 bg-white bg-opacity-70 font-semibold text-[25px] text-black">
                  {image.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
        </div>
        <h2 className='text-[30px] font-bold text-[#505F4E] pt-5 px-[150px]'>Danh mục</h2>
        <hr className="border-[0.85px] border bg-[#000000] mx-auto m-4" />
        <div className='grid grid-cols-4 gap-4 mx-auto px-[150px] py-[20px]'>
          {categories.map(category => (
            <div key={category.id} className='relative'>
              <img src={category.image} alt={category.name} className='w-full h-full object-cover rounded' />
              <div className='absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded'>
                <div className='text-white text-center'>
                  <h3 className='text-lg font-bold'>{category.name}</h3>
                  <p>{category.itemCount} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
