import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
     <header className="bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1] py-4 " style={{fontFamily:'baloon'}}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Search Bar */}
        <div className="relative w-[525px] mx-[220px]">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Suchen Sie nach Produkten, Marken und mehr" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>  
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
          <a href="#" className="flex items-center space-x-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
            <span>Account</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
            <span>Cart</span>
          </a>
        </div>
      </div>
      <hr className=" border-[0.85px] border bg-[#E3E3E3] w-[1125px]  mx-auto m-4"/>
      {/* Navigation Menu */}
      <nav className="container mx-auto flex justify-center space-x-10 mt-4 px-6 text-[#FFFFFF]">
          <div className="flex gap-1 ">
              <a href="/list"><p>Beleuchtung</p></a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>

          <div className="flex gap-1 ">
             <a href="/detail"> <p>Growbox</p></a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
          <div className="flex gap-1 ">
              <p>Dünger</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
          <div className="flex gap-1 ">
              <p>Erde & Substrate</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
          <div className="flex gap-1 ">
              <p>Töpfe & Behälter</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
          <div className="flex gap-1 ">
              <p>Pflanzen & Gärtnern </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
          <div className="flex gap-1 ">
              <p>Lüftung & Klimaanlage</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-white my-2 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>

      </nav>
    </header>
    </>
  );
};

export default Header;
