import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ICategory } from "../../interface/category";
import instance from "../../api";

type Props = {};

const Header = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await instance.get("/categorys");
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    navigate(`/category/${categoryId}`);
  };

  
  const onSubmit = (data: any) => {
    const { keywords } = data;
    navigate(`/search?keyword=${keywords}`);
  };
  return (
    <>
      <header className="bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1] py-4" style={{ fontFamily: 'baloon' }}>
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Search Bar */}
          <form className="relative w-[525px] mx-[220px]" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('keywords')}
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Tìm kiếm sản phẩm, thương hiệu và hơn thế nữa"
              required
            />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </form>
          {/* Language and Account */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button className="flex items-center space-x-1 pr-12 text-white">
                <span>En</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg hidden">
                <li className="px-4 py-2 hover:bg-gray-200">English</li>
                <li className="px-4 py-2 hover:bg-gray-200">Deutsch</li>
              </ul>
            </div>
            <Link to="/register" className="flex items-center space-x-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span>Account</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>Cart</span>
            </Link>
          </div>
        </div>
        <hr className="border-[0.85px] border bg-[#E3E3E3] w-[1125px] mx-auto my-4" />
        {/* Navigation Menu */}
        <nav className="container mx-auto flex justify-center gap-12 px-6 text-white">
          <NavLink to="/" className="flex gap-1 items-center pt-1">
            <p>Trang Chủ</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
          <NavLink to="/list" className="flex gap-1 items-center pt-1">
            <p>Sản phẩm</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
          <NavLink to="#" className="flex gap-1 items-center pt-1">
            <p>Phân bón</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
          <NavLink to="#" className="flex gap-1 items-center pt-1">
            <p>Tầng nền</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
          <NavLink to="#" className="flex gap-1 items-center pt-1">
            <p>Chậu & Thùng</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
          <NavLink to="#" className="flex gap-1 items-center pt-1">
            <p>Cây trồng & Làm vườn</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
          <div className="">
            <div className=" items-center flex-cols gap-2 pt-8">
              <p className="px-2">Danh mục</p>
                <div className="flex py-1 ">
                  <select
                    onChange={handleCategoryChange}
                    className=" px-2 border border-1 rounded-[5px] text-[#BDBDBD]"
                  >
                    {categories.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
