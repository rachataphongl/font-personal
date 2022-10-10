import { Link } from 'react-router-dom';
import OrderCart from '../Component/Cart/OrderCart';
import { useCart } from '../contexts/CartContext';


function Cart() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="h-100 bg-light-kai font-['Aclonica'] ">
      <>
        {cart.length > 0 ? (
          <>
            <div className="h-fit grid grid-cols-2  pt-[20vh] px-[200px]">
              {cart.map((item, idx) => (
                <OrderCart item={item} key={item.id} idx={idx} />
              ))}
            </div>
            <div className="flex fixed left-10 bottom-10">
              <div className="flex justify-between items-center text-[2rem] text-white bg-kai h-[5rem] w-[300px] rounded-[15px] px-5 select-none">
                <p className="text-xl">Total&nbsp;</p>
                {totalPrice}
                &nbsp; B
              </div>
            </div>
            <Link to="/order">
              <button className="flex fixed right-[50px] bottom-10">
                <div className="flex justify-center items-center text-[1.5rem] text-white bg-kai h-[3rem]  rounded-[15px] w-[200px]   hover:bg-dark-kai px-5">
                  <p>Checkout</p>
                </div>
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="h-100 bg-light-kai">
              <div className="h-fit grid grid-cols-2  pt-[20vh] px-[200px]">
                <div className="flex fixed left-10 bottom-10">
                  <div className="flex justify-between items-center text-[2rem] text-white bg-gray-400 h-[5rem] w-[300px] rounded-[15px] select-none px-5">
                    <p className="text-xl">Total&nbsp;</p>
                    <p>0&nbsp; B </p>
                  </div>
                </div>
                <div className="flex fixed  right-[50px] bottom-10">
                  <button
                    className="flex justify-center items-center text-[1.5rem] text-white bg-gray-400 select-none h-[3rem]  rounded-[15px] w-[200px]  "
                    disabled={cart.length === 0}
                  >
                    <p>Checkout</p>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default Cart;
