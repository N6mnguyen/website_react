import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../config/axios';
import { IProduct } from '../interface/product';
import ProductItem from './product/productItem';

type Props = {};

const Search = (props: Props) => {
  const [search] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [keywords, setKeywords] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get(`products?name_like=${search.get('keyword')}`);
        setProducts(data);
        setKeywords(search.get('keyword') as string);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [search]);

  return (
    <>
    <div className='grow px-[180px] py-6'>
        <h1 className='text-[30px] font-bold text-[#505F4E] py-10'>Tìm kiếm sản phẩm: {keywords}</h1>
        <div className='grid grid-cols-3 gap-[100px]'>
            {products.map((product: IProduct) => (
            <ProductItem key={product.id} product={product} />
            ))}
        </div>
    </div>
    </>
  );
};

export default Search;
