import React, { useState, useEffect } from 'react';
import ProductItem from './product/productItem';
import { IProduct } from '../interface/product';
import api from "../config/axios";
import { ICategory } from '../interface/category';
import { GetProductsByCategory, SearchProducts } from '../services/product';

type Props = {
    products: IProduct[];
};

const List = ({ products }: Props) => {
    const [categorys,setCategorys ] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products);

    useEffect(() => {
        const fetchCategorys = async () => {
            try {
                const { data } = await api.get('categorys');
                setCategorys(data);
            } catch (error) {
                console.error("Error fetching categorys:", error);
            }
        };
        fetchCategorys();
    }, []);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            try {
                if (selectedCategory) {
                    const result = await GetProductsByCategory(selectedCategory);
                    setFilteredProducts(result);
                } else if (searchTerm) {
                    const result = await SearchProducts(searchTerm);
                    setFilteredProducts(result);
                } else {
                    setFilteredProducts(products);
                }
            } catch (error) {
                console.error("Error fetching filtered products:", error);
            }
        };
        fetchFilteredProducts();
    }, [selectedCategory, searchTerm, products]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#B5DCB0] to-[#FFEDE0] flex items-center h-[163px]">
                <p className="text-[#505F4E] font-bold text-[30px] px-[190px]">Töpfe & Behälter</p>
            </div>
            <div className="bg-[#FFFFF]">
                <div className="h-[213px]">
                    <div className="mx-auto flex item-center justify-between py-[31px] px-[180px]">
                        {categorys.map((category) => (
                            <div key={category.id} className="mx-auto flex item-center justify-between border w-[193px] h-[61.71px] bg-[#D2E8CD] rounded-[6px]">
                                <div className="bg-[#D2E8CD] py-2 ">
                                    <img src="/src/assets/danhmuc3.png" alt="" />
                                </div>
                                <div>
                                    <p className="px-2 py-4 text-[#665345] text-[15px]">{category.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex mx-auto item-center justify-between px-[149px]">
                    <div className="flex">
                        <div className="py-1 px-3 text-[18.8px]" style={{ fontFamily: 'Inter' }}>Sort By :</div>
                        <div className="relative mb-8 w-[221.89px] h-[43.25px] flex gap-5">
                            <select onChange={handleCategoryChange} className="w-full py-2.5 px-4 border border-1 rounded-[6px] text-[#BDBDBD]">
                                <option value="">All Categories</option>
                                {categorys.map(category => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex mx-auto pr-[450px]">
                        <div className="py-2 px-3 text-[18.8px]" style={{ fontFamily: 'Inter' }}>Search :</div>
                        <div className="relative mb-8 w-[221.89px] h-[43.25px] flex gap-5">
                            <div className="">
                                <input 
                                    type="text" 
                                    placeholder="Search Products" 
                                    value={searchTerm} 
                                    onChange={handleSearchChange}
                                    className="border border-1 w-full py-2.5 px-4 relative rounded-[6px] text-[#BDBDBD]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="grow px-[180px]">
                        <div className="bg-white">
                            <div className="grid grid-cols-3 gap-[100px]">
                                {filteredProducts.map(product => (
                                    <ProductItem key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 w-[300px] flex flex-col item-center gap-8 pr-[90px] flex-none flex-cols">
                        <h2 className="text-[30px] font-bold text-[#505F4E]">Kategorien</h2>
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" className="w-[13.16px] h-[13.16px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="link-checkbox" className="mx-1">Eckige Töpfe</label>
                        </div>
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" className="w-[13.16px] h-[13.16px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="link-checkbox" className="mx-1">Runde Töpfe</label>
                        </div>
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" className="w-[13.16px] h-[13.16px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="link-checkbox" className="mx-1">Untersetzer</label>
                        </div>
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" className="w-[13.16px] h-[13.16px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="link-checkbox" className="mx-1">Pflanzschalen</label>
                        </div>
                        <div>
                            <div className='w-[213px] h-[262px] py-5 relative'>
                                <img src="src/assets/category.png" alt="" />
                                <div className="absolute bottom-14 left-0 w-full h-full flex items-center px-5">
                                    <div className="font-bold text-[18.9px] text-white">
                                        <p>Grow your own</p>
                                        <p>favourite plant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-10'>
                            <div>
                                <h2 className=' text-[18px] font-bold'>Filter By Price</h2>
                            </div>
                            <div className='w-[228.68px] h-[4.42px]'>
                                <img src="/src/assets/line.png" alt="" />
                            </div>
                            <div className='flex mx-auto items-center justify-between text-[#1E1E1E]  py-2 px-1'>
                                <p className='text-[13.04px]'>From</p>
                                <p className='text-[13.04px]'>Filter</p>
                            </div>
                            <div className='py-4'>
                                <div>
                                    <h2 className=' text-[18px] font-bold'>Filter By Size</h2>
                                </div>
                                <div className='w-[228.68px] h-[4.42px]'>
                                    <img src="/src/assets/line.png" alt="" />
                                </div>
                                <div className='flex mx-auto items-center justify-between text-[#1E1E1E]  py-2 px-1'>
                                    <p className='text-[13.04px]'>2 mm by 50</p>
                                    <p className='text-[13.04px]'>Filter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;
