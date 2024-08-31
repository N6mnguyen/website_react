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

const CartContext: React.FC<DetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const foundProduct = products.find(product => product.id === parseInt(id || '0', 10));
    setProduct(foundProduct || null);
  }, [id, products]);


  const handleCheckout = () => {
    alert('Đã thanh toán đơn hàng!');
    setCart([]); // Xóa giỏ hàng sau khi thanh toán
  };
  if (!product) return <p>Không có sản phẩm!</p>;

  return (
    <>
      {/* Giỏ hàng */}
      <div className="px-[240px] py-4">
        <h2 className="text-[30px] text-[#4E7C32]">Giỏ hàng</h2>
        {cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.product.name} - Số lượng: {item.quantity}
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button
            className="bg-[#4E7C32] text-white px-6 py-2 mt-4 rounded-lg"
            onClick={handleCheckout}
          >
            Thanh toán
          </button>
        )}
      </div>
    </>
  );
};

export default CartContext;
