import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
  <div>
    <div className=" bg-gradient-to-b from-[#FFFFFF] to-[#BCDEB6] h-[416px] flex items-center justify-center">
      <div className="flex gap-2">
          <div className="">
            <h1 className="text-4xl mb-4 px-20 text-[#505F4E]" style={{fontFamily:'Baloo',fontWeight:'bold'}}>
              <div>Đăng ký nhận thông tin * </div>
              <div>_ Bản tin của chúng tôi</div>
            </h1>
            <p className="text-gray-600 text-[#505F4E] mx-[120px]">
           <p>Nhận cập nhật hàng tuần về </p>
           <p>sản phẩm qua email của bạn, không spam</p>
           <p>đảm bảo, chúng tôi hứa ✌️</p>
            </p>
          </div>
          <div className='py-[100px]'>
        <form className="max-w-md mx-auto w-[508px] h-[62.39px]">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#6C777C] className='border w-[42px] h-[42px] my-2 mx-2 border-[#F8F8F8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <div className='px-2 pb-10'>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='youremail123@gmail.com' required />
            <button type="submit" className="w-[158px] h-[55.37px] bg-[#656C66] text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
          </div>
        </form>
          </div>
        </div>
    </div>
        <div className='bg-[#053D29] w-full h-[296px]'>
              <div className=' flex items-center justify-center gap-[150px] py-6 px-10'>
                <div className='flex flex-col text-white'>
                  <p className='text-[12.55px]'>Công ty Cổ phần Thương mại Boo</p>
                  <p className='text-[12.55px]'>Trụ sở: 19A Đặng Trần Côn, P.Quốc Tử Giám, Q.Đống Đa, Tp.Hà Nội, Việt Nam.</p>
                  <p className='text-[12.55px]'>Văn phòng: Tầng 2, tòa nhà Kim Khí Thăng Long, số 1 Lương Yên, P.Bạch Đằng, Q.Hai Bà Trưng, Tp.Hà Nội, Việt Nam.</p>
                  <div className='flex gap-8 pt-6'>
                    <div className='w-[13.38px] h-[10.87]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg>
                    </div>
                    <div className='w-[13.38px] h-[10.87]'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor" /></svg>
                    </div>
                    <div className='w-[13.38px] h-[10.87]'>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col text-white'>
                  <h3 className='py-3 text-[12.71px]'>BOO</h3>
                  <p className='text-[11.71px] py-2'>Về BOO</p>
                  <p className='text-[11.71px] py-2'>Về đại lý</p>
                  <p className='text-[11.71px] py-2'>Tuyển dụng</p>
                  <p className='text-[11.71px] py-2'>Đặt làm đồng phục</p>
                </div>
                <div className='flex flex-col text-white'>
                  <h3 className='py-3 text-[12.71px]'>HỖ TRỢ KHÁCH HÀNG </h3>
                  <p className='text-[11.71px] py-2' >FAQ</p>
                  <p className='text-[11.71px] py-2'>Đăng nhập/Đăng ký thành viên</p>
                  <p className='text-[11.71px] py-2'>Chính sách thành viên</p>
                  <p className='text-[11.71px] py-2'>Hướng dẫn mua hàng trực tuyến</p>
                  <p className='text-[11.71px] py-2'>Đổi/trả & Hoàn tiền</p>
                </div>
                <div className='flex flex-col text-white'>
                  <h4 className='py-3 text-[12.71px]'>HOTLINE</h4>
                  <p className='text-[11.71px] py-2'>Kênh CSKH: BOO Zalo OA </p>
                  <p className='text-[11.71px] py-2'>(T2 - T6, 8h30 - 17h30)</p>
                  <p className='text-[11.71px] py-2'>(T7, 8h30 - 12h00)</p>
                  <p className='text-[11.71px] py-2'>Chính sách bảo hành</p>
                  <p className='text-[11.71px] py-2'>Email: online@boo.vn</p>
                </div>
              </div>
          </div>
          <div className='h-[43.5px] bg-[#062F21] flex items-center justify-center mx-auto gap-[350px]'>
            <div>
              <p className='text-white text-[11.71px]'> 2023 hood.de , Inc.</p>
            </div>
            <div>
              <img src="/src/assets/pay.png" alt="" />
            </div>
            <div className='flex text-white'>
              <p className='text-[11.71px]'>Scroll to top</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg>
</div>
            </div>
          </div>
  </div>
    
    </>
  )
}

export default Footer