import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../interface/product';

interface DetailProps {
  products: IProduct[];
}

interface CartItem {
  product: IProduct;
  quantity: number;
}

const Detail: React.FC<DetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const foundProduct = products.find(product => product.id === parseInt(id || '0', 10));
    setProduct(foundProduct || null);
  }, [id, products]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Nếu chưa có trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
      setCart(prevCart => [...prevCart, { product, quantity: 1 }]);
    }
  };
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 1 ? count - 1 : 1);

  if (!product) return <p>Không có sản phẩm!</p>;

  return (
    <>
      <div>
        <div className="bg-white p-8 rounded-lg flex flex-col lg:flex-row py-[108px]">
          <div className="lg:w-1/2">
            <img
              className="w-[355px] h-[355px] mx-auto"
              src={product.image}
              alt="Square cultivation pot"
            />
            <div className="mt-4 flex justify-center space-x-4">
              <img
                className="w-[106px] h-[106px] border"
                src={product.image}
                alt="Thumbnail 1"
              />
              <img
                className="w-[106px] h-[106px] border"
                src={product.image}
                alt="Thumbnail 2"
              />
              <img
                className="w-[106px] h-[106px] border"
                src={product.image}
                alt="Thumbnail 3"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0 px-[60px]">
            <span className="text-[#4E7C32] uppercase tracking-wider font-bold">Cây</span>
            <h1 className="text-[44px] font-bold mt-2">{product.name}</h1>
            <p className="text-[#68707D] mt-4 text-[16px]">{product.description}</p>
            <div className="mt-6 flex flex-col">
              <div>
                <span className="text-[30px] font-bold">{product.price}</span>
                <span className="text-[#505F4E] ml-4 text-[16px] font-bold border border-1 rounded-[5px] bg-[#FFEDE0] w-[51.21px] h-[28.67px]">
                  50%
                </span>
              </div>
              <span className="line-through text-[16px] font-bold">{product.price}</span>
            </div>
            <div className="flex items-center mt-6 ">

            <div className="flex items-center">
      <button
        className="bg-[#F7F8FD] px-4 py-2 rounded-l-lg"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="number"
        value={count}
        className="text-center w-16 bg-[#F7F8FD] py-2"
        readOnly
      />
      <button
        className="bg-[#F7F8FD] px-4 py-2 rounded-r-lg"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
                  
              <button
                className="bg-[#4E7C32] text-white px-6 py-2 ml-4 rounded-lg w-[273px] h-[54px] flex items-center justify-center gap-3"
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
