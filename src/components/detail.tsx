import React from 'react'

type Props = {}

const Detail = (props: Props) => {
  return (
    <>
    <div>
        <div className="bg-white p-8 rounded-lg  flex flex-col lg:flex-row py-[108px]">
            <div className="lg:w-1/2">
                <img className="w-[355px] h-[355px] mx-auto" src="/src/assets/cart.png" alt="Square cultivation pot"/>
                <div className="mt-4 flex justify-center space-x-4">
                    <img className="w-[106px] h-[106px] border" src="/src/assets/cart3.png" alt="Thumbnail 1"/>
                    <img className="w-[106px] h-[106px] border" src="/src/assets/cart1.png" alt="Thumbnail 2"/>
                    <img className="w-[106px] h-[106px] border" src="/src/assets/cart2.png" alt="Thumbnail 3"/>
                </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0 px-[60px]">
                <span className="text-[#4E7C32] uppercase tracking-wider font-bold">Plant</span>
                <h1 className="text-[44px] font-bold mt-2">Square cultivation pots 0.27 to 2 litres</h1>
                <p className="text-[#68707D] mt-4 text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <div className="mt-6 flex flex-col">
                  <div>
                    <span className="text-[30px] font-bold">$125.00</span>
                    <span className="text-[#505F4E] ml-4 text-[16px] font-bold border border-1 rounded-[5px] bg-[#FFEDE0] w-[51.21px] h-[28.67px]">50%</span>
                  </div>
                    <span className="line-through text-[16px] font-bold">$250.00</span>
                </div>
                <div className="flex items-center mt-6 ">
                    <button className="bg-[#F7F8FD] px-4 py-2 rounded-l-lg">-</button>
                      <input type="number" value="3" className="text-center w-16 bg-[#F7F8FD] py-2"/>
                    <button className="bg-[#F7F8FD] px-4 py-2 rounded-r-lg">+</button>
                    <button className="bg-[#4E7C32] text-white px-6 py-2 ml-4 rounded-lg w-[273px] h-[54px] flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                     <p>Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='px-[240px] pt-[10px] pb-[40px]'>
      <div><h1 className='text-[30px] text-[#4E7C32]'>Discription</h1></div>
      <div>
        <p className='text-[20px] text-[#665345]'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        <p> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
        <p> type and scrambled i</p>
        </p>
      </div>
    </div>
    <div className='mx-auto px-[240px]'>
      <div><h1 className='text-[30px] text-[#4E7C32]'>About</h1></div>
      <div>
        <p className='text-[20px] text-[#665345]'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        <p> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
        <p> type and scrambled i</p>
        </p>
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
        <button className='w-[118.95px] h-[33.99px] bg-[#4E7C32] text-[14.27px] text-white border border-1 rounded-full'>Write reviews</button>
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
            <p>I've been using this cleanser for about five or six months now and my acne </p>
            <p>is almost completely gone. I really struggled for years with my skin and tried </p>
            <p>everything possible but this is the only thing that managed to clear up my </p>
            <p>skin. 100% recommend and will continue to use is for sure.</p>
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
              <p>I've been using this cleanser for about five or six months now and my acne </p>
              <p>is almost completely gone. I really struggled for years with my skin and tried </p>
              <p>everything possible but this is the only thing that managed to clear up my </p>
              <p>skin. 100% recommend and will continue to use is for sure.</p>
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
              <p>I've been using this cleanser for about five or six months now and my acne </p>
              <p>is almost completely gone. I really struggled for years with my skin and tried </p>
              <p>everything possible but this is the only thing that managed to clear up my </p>
              <p>skin. 100% recommend and will continue to use is for sure.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Detail