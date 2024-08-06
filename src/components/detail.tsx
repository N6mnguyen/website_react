import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../interface/product';

interface DetailProps {
  products: IProduct[];
}

const Detail: React.FC<DetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    // Tìm sản phẩm theo ID từ danh sách sản phẩm
    const foundProduct = products.find(product => product.id === parseInt(id || '0', 10));
    setProduct(foundProduct || null);
  }, [id, products]);

  if (!product) return <p>Không có sản phẩm!</p>;

  return (
    <>
    <div>
        <div className="bg-white p-8 rounded-lg  flex flex-col lg:flex-row py-[108px]">
            <div className="lg:w-1/2">
                <img className="w-[355px] h-[355px] mx-auto" src={product.image} alt="Square cultivation pot"/>
                <div className="mt-4 flex justify-center space-x-4">
                    <img className="w-[106px] h-[106px] border" src={product.image} alt="Thumbnail 1"/>
                    <img className="w-[106px] h-[106px] border" src={product.image} alt="Thumbnail 2"/>
                    <img className="w-[106px] h-[106px] border" src={product.image} alt="Thumbnail 3"/>
                </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0 px-[60px]">
                <span className="text-[#4E7C32] uppercase tracking-wider font-bold">Cây</span>
                <h1 className="text-[44px] font-bold mt-2">{product.name}</h1>
                <p className="text-[#68707D] mt-4 text-[16px]">{product.description}</p>
                <div className="mt-6 flex flex-col">
                  <div>
                    <span className="text-[30px] font-bold">{product.price}</span>
                    <span className="text-[#505F4E] ml-4 text-[16px] font-bold border border-1 rounded-[5px] bg-[#FFEDE0] w-[51.21px] h-[28.67px]">50%</span>
                  </div>
                    <span className="line-through text-[16px] font-bold">{product.price}</span>
                </div>
                <div className="flex items-center mt-6 ">
                    <button className="bg-[#F7F8FD] px-4 py-2 rounded-l-lg">-</button>
                      <input type="number" value="3" className="text-center w-16 bg-[#F7F8FD] py-2"/>
                    <button className="bg-[#F7F8FD] px-4 py-2 rounded-r-lg">+</button>
                    <button className="bg-[#4E7C32] text-white px-6 py-2 ml-4 rounded-lg w-[273px] h-[54px] flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                     <p>Thêm giỏ hàng</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='px-[240px] pt-[10px] pb-[40px]'>
      <div><h1 className='text-[30px] text-[#4E7C32]'>Mô tả</h1></div>
      <div>
      {product.description}
      </div>
    </div>
    <div className='mx-auto px-[240px]'>
      <div><h1 className='text-[30px] text-[#4E7C32]'>Về</h1></div>
      <div>
      Có sẵn túi đựng rác phù hợp tùy chỉnh - Tương thích với mã lót 30S  
    Hỗ trợ có trụ sở tại Hoa Kỳ - Câu hỏi, thắc mắc hoặc cần các bộ phận thay thế? Nhóm khách hàng thân thiết của chúng tôi đang đứng trước. Vui lòng tham khảo hướng dẫn sử dụng để biết thông tin liên hệ
      </div>
    </div>
    <div className="bg-white p-8 rounded-lg  flex flex-col lg:flex-row py-[69px] ">
      <div className='lg:w-1/2'>
        <div className='flex mx-[240px] '>
          <img className="w-[183px] h-[183px] mx-auto" src="/src/assets/cart.png" alt="Square cultivation pot"/>
          <div className='py-16 px-5'>
            <div className='flex'>
                <img src="/src/assets/star1.png" alt="" className='w-[32.8px] h-[31.75px]'/>
                <img src="/src/assets/star1.png" alt="" className='w-[32.8px] h-[31.75px]'/>
                <img src="/src/assets/star1.png" alt="" className='w-[32.8px] h-[31.75px]'/>
                <img src="/src/assets/star1.png" alt="" className='w-[32.8px] h-[31.75px]'/>
                <img src="/src/assets/star1.png" alt="" className='w-[32.8px] h-[31.75px]'/>
              </div>
              <div className='flex px-10'>
                <p className='text-[#4E7C32] text-[32.75px]'>5.0</p>
                <p className='text-[#666666] text-[17.64px] py-3 px-2'>(388)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 px-[300px]'>
        <button className='w-[118.95px] h-[33.99px] bg-[#4E7C32] text-[14.27px] text-white border border-1 rounded-full'>Viết bình luận</button>
      </div>
    </div>
    <div className='mx-[260px] mb-[130px]'>
      <div className='flex gap-1'>
        <p className='text-[14.03px] text-[#000000] py-2'>1</p>
          <div className='py-[14px]'>
               <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
          </div>
          <div>
            <hr className=" border-[0.85px] border bg-[#A2A0A0] w-[447.74px] h-[10.34px]  mx-auto m-4 rounded-[3px]"/>
          </div>  
          <p className='text-[#666666] text-[16.25px] py-2'>
          (388)
          </p>
      </div>
      <div className='flex gap-1'>
        <p className='text-[14.03px] text-[#000000] py-2'>2</p>
          <div className='py-[14px]'>
               <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
          </div>
          <div>
            <hr className=" border-[0.85px] border bg-[#D9D9D9] w-[69.45px] h-[10.34px]  mx-auto m-4 rounded-[3px]"/>
          </div>  
      </div>
      <div className='flex gap-1'>
        <p className='text-[14.03px] text-[#000000] py-2'>3</p>
          <div className='py-[14px]'>
               <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
          </div>
          <div>
            <hr className=" border-[0.85px] border bg-[#D9D9D9] w-[69.45px] h-[10.34px]  mx-auto m-4 rounded-[3px]"/>
          </div>  
      </div>
      <div className='flex gap-1'>
        <p className='text-[14.03px] text-[#000000] py-2'>4</p>
          <div className='py-[14px]'>
               <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
          </div>
          <div>
            <hr className=" border-[0.85px] border bg-[#D9D9D9] w-[69.45px] h-[10.34px]  mx-auto m-4 rounded-[3px]"/>
          </div>  
      </div>
      <div className='flex gap-1'>
        <p className='text-[14.03px] text-[#000000] py-2'>5</p>
          <div className='py-[14px]'>
               <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
          </div>
          <div>
            <hr className=" border-[0.85px] border bg-[#D9D9D9] w-[69.45px] h-[10.34px]  mx-auto m-4 rounded-[3px]"/>
          </div>  
      </div>
    </div>
    {/* 01 */}
        <div className="grid grid-cols-subgrid gap-[130px] col-span-3 pb-5">
            <div className="col-start-2">
            <div className='flex gap-6'> 
              <h2 className='text-[#4E7C32] text-[16.25px] py-2'>Aman gupta</h2>
              <div className='flex py-4'> 
                <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
              </div>
          </div>
          <div className='text-[11.08px] text-[#665345]'>
            <p>Tôi đã sử dụng sản phẩm làm sạch này khoảng năm hoặc sáu tháng nay và mụn của tôi </p>
            <p>gần như hoàn toàn biến mất</p>
            <p>mọi thứ có thể nhưng đây là thứ duy nhất giúp làm sạch</p>
            <p>da của tôi. Tôi 100% khuyến nghị và chắc chắn sẽ tiếp tục sử dụng.</p>
          </div>
            </div>
        </div>
        {/* 02 */}
        <div className="grid grid-cols-2 gap-2 mx-[240px] pb-12 px-20 ">
          <div>
              <div className='flex gap-6'> 
                <h2 className='text-[#4E7C32] text-[16.25px] py-2'>Aman gupta</h2>
                <div className='flex py-4'> 
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                </div>
            </div>
            <div className='text-[11.08px] text-[#665345]'>
            <p>Tôi đã sử dụng sản phẩm làm sạch này khoảng năm hoặc sáu tháng nay và mụn của tôi </p>
            <p>gần như hoàn toàn biến mất</p>
            <p>mọi thứ có thể nhưng đây là thứ duy nhất giúp làm sạch</p>
            <p>da của tôi. Tôi 100% khuyến nghị và chắc chắn sẽ tiếp tục sử dụng.</p>
            </div>
          </div>
          <div className='px-7'>
              <div className='flex gap-6'> 
                <h2 className='text-[#4E7C32] text-[16.25px] py-2'>Aman gupta</h2>
                <div className='flex py-4'> 
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                  <img src="/src/assets/star2.png" alt=""className='w-[11.1px] h-[10.74px]'/>
                </div>
            </div>
            <div className='text-[11.08px] text-[#665345]'>
            <p>Tôi đã sử dụng sản phẩm làm sạch này khoảng năm hoặc sáu tháng nay và mụn của tôi </p>
            <p>gần như hoàn toàn biến mất</p>
            <p>mọi thứ có thể nhưng đây là thứ duy nhất giúp làm sạch</p>
            <p>da của tôi. Tôi 100% khuyến nghị và chắc chắn sẽ tiếp tục sử dụng.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Detail