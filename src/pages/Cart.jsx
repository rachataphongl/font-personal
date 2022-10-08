import OrderCart from '../Component/Cart/OrderCart';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart } = useCart();

  return (
    <div className="bg-light-kai h-100 flex p-[16vh]  w-screen items-center justify-items-start flex-col  text-white">
      {cart.map((item, idx) => (
        <OrderCart item={item} key={item.id} idx={idx} />
      ))}
    </div>
  );
}

export default Cart;
