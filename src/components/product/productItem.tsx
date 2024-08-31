import React, { useContext } from 'react';
import { IProduct } from '../../interface/product';
import { Link } from 'react-router-dom';
import { cartCT } from '../../context/cart';

type Props = {
  product: IProduct;
};

const ProductItem = ({ product }: Props) => {
  const { cart, setCart } = useContext(cartCT);

  return (
    <div className="relative group p-2 rounded-lg overflow-hidden ">
      {/* Product Image */}
      <div className="w-full h-[200px] overflow-hidden mb-4">
        <Link to={`/detail/${product.id}`}>
          <img
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>

      {/* Product Name */}
      <Link to={`/detail/${product.id}`}>
      <h3 className="text-[16.92px] font-bold mb-2" style={{ fontFamily: 'Inter' }}>
        {product.name}
      </h3>
      </Link>
      {/* Product Category and Price */}
      <Link to={`/detail/${product.id}`}>
      <div className="flex justify-between mb-4">
        <span className="text-[#777777]">{product.category}</span>
        <span className="text-[#665345]">{product.price}</span>
      </div>
      </Link>
      {/* "Add to Cart" Button */}
      <div className="absolute bottom-20  flex items-center justify-center group-hover:opacity-100 ">
        <button
          className="bg-[#b0b5a1] text-white py-1 text-[12px] rounded hover:bg-blue-600 transition-colors duration-300 opacity-0 group-hover:opacity-100 w-[200px] "
          onClick={() => setCart(cart + 1)}
        >
          Thêm
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
