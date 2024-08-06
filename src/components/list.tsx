import React, { useState, useEffect } from 'react';
import ProductItem from './product/productItem';
import { IProduct } from '../interface/product';
import api from "../config/axios";
import { ICategory } from '../interface/category';

type Props = {
    products: IProduct[];
};

const List = ({ products }: Props) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(Number.MAX_SAFE_INTEGER);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await api.get('categorys');
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesSearchTerm = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchesCategory && matchesSearchTerm && matchesPrice;
    });

    const displayCategories = categories.slice(0, 4);

    return (
        <>
            <div className="bg-gradient-to-r from-[#B5DCB0] to-[#FFEDE0] flex items-center h-[163px]">
                <p className="text-[#505F4E] font-bold text-[30px] px-[190px]">Chậu & Thùng chứ</p>
            </div>
            <div className="bg-[#FFFFF]">
                <div className="h-[213px]">
                    <div className="mx-auto flex item-center justify-between py-[31px] px-[180px]">
                        {displayCategories.map((category) => (
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
                            <select 
                                className="w-full py-2.5 px-4 border border-1 rounded-[6px] text-[#BDBDBD]" 
                                onChange={handleCategoryChange}
                                value={selectedCategory}
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
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
                                 {filteredProducts.map((product: IProduct) => (
                                 <ProductItem key={product.id} product={product} />
                                  ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 w-[300px] flex flex-col item-center gap-8 pr-[90px] flex-none flex-cols">
                        <h2 className="text-[30px] font-bold text-[#505F4E]">Danh mục</h2>
                        {categories.map(category => (
                            <div key={category.id} className="flex items-center">
                                <input 
                                    id={`link-checkbox-${category.id}`} 
                                    type="checkbox" 
                                    className="w-[13.16px] h-[13.16px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={() => setSelectedCategory(category.name)}
                                />
                                <label htmlFor={`link-checkbox-${category.id}`} className="mx-1">{category.name}</label>
                            </div>
                        ))}
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
                            <h2 className='text-[18px] font-bold'>Filter By Price</h2>
                            <div className='flex gap-2 py-2'>
                                <div className='flex items-center'>
                                    <p className='text-[13.04px]'>From</p>
                                    <input 
                                        type="number" 
                                        className="border border-1 w-full py-2.5 px-4 relative rounded-[6px] text-[#BDBDBD] ml-2 w-20 h-2" 
                                        value={minPrice} 
                                        onChange={handleMinPriceChange}
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <p className='text-[13.04px]'>To</p>
                                    <input 
                                        type="number" 
                                        className="border border-1 w-full py-2.5 px-4 relative rounded-[6px] text-[#BDBDBD] ml-2  w-20 h-2" 
                                        value={maxPrice} 
                                        onChange={handleMaxPriceChange}
                                    />
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
