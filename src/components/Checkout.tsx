import React from 'react';
import { useCart } from './CartContext';

interface CheckoutProps {
  onOrderComplete: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onOrderComplete }) => {
  const { cartItems, clearCart } = useCart();

  const handleCheckout = () => {
    // Giả sử đây là nơi bạn sẽ xử lý logic thanh toán, gọi API nếu cần thiết.
    clearCart();
    onOrderComplete();
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Complete Order</button>
    </div>
  );
};

export default Checkout;
