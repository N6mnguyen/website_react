import React from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './product/productItem'

type Props = {
  products: IProduct[]
}

const Home = ({ products }: Props) => {
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
                Wir kümmern uns um Ihre schöner Garten und Haus
              </h1>
              <p className="text-gray-600 mb-4 px-20 text-[#505F4E]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className='px-20'>
                <button className="w-[216px] h-[59px] border-stone-400 mb-4 border-[3px] text-[#505F4E] rounded" style={{ fontFamily: 'Poppins' }}>Lern mehr</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#F8F4F0] to-[#F8F4F0]'>
        <h2 className='text-[30px] font-bold text-[#505F4E] pt-5 px-[150px]'>best sellers</h2>
        <div className='bg-white h-[429px]'>
          <div className='grid grid-cols-4 mx-auto px-[150px] gap-[150px] py-[70px]'>
            {displayProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <div className='mx-auto flex gap-2 px-[250px] py-14'>
            <div>
              <img src="/src/assets/anh1.png" alt="" />
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <div><img src="/src/assets/anh2.png" alt="" /></div>
              <div><img src="/src/assets/anh3.png" alt="" /></div>
              <div><img src="/src/assets/anh4.png" alt="" /></div>
              <div><img src="/src/assets/anh5.png" alt="" /></div>
            </div>
          </div>
        </div>
        <h2 className='text-[30px] font-bold text-[#505F4E] pt-5 px-[150px]'>Kategorien</h2>
        <hr className="border-[0.85px] border bg-[#000000] mx-auto m-4" />
        <div className='grid grid-cols-4 px-[120px] relative w-full'>
          <div>
            <div>
              <img src="/src/assets/product1.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product7.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product8.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product6.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product3.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product4.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product7.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/src/assets/product8.png" alt="" />
            </div>
            <div className="absolute top-2 ml-[170px] py-2">
              <p className='text-white text-[18px] font-bold'>Beleuchtung</p>
              <p className='text-white'>30 items</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
