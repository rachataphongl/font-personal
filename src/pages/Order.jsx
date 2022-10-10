import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

function Order() {
  const { cart, totalPrice } = useCart();
  const { user } = useAuth()
  // console.log(totalPrice);
  console.log(cart);
  return (
    <div className="bg-light-kai h-100 flex pt-[20vh]   w-screen items-center justify-items-start flex-col  text-white font-['Aclonica'] gap-10">
      <div className="flex flex-col items-center text-[2rem] text-black bg-menu h-[550px] w-[550px] rounded-[15px] px-3 py-5 select-none">
        <h1>{user.username} order</h1>
        <div className="flex flex-col  text-[1rem] w-[500px] justify-between">
              {cart.map((item, idx) => (
                <div  key={item.id} className='flex justify-between h-[2.5rem] bg-white my-1 rounded-[10px] items-center px-2' >
                  <div>
                  {item.Menu.name}&nbsp;*&nbsp;{item.amount}
                  </div>
                  <div>
                  {item.Menu.price * item.amount}&nbsp;B 
                  </div>
                </div>
              ))}
            </div>

      </div>
      <div className="flex fixed  bottom-[160px]">
        <div className="flex justify-between items-center text-[2rem] text-black bg-kai h-[5rem] w-[300px] rounded-[15px] px-5 select-none">
          <p className="text-xl">Total&nbsp;</p>
          {totalPrice}
          &nbsp; B
        </div>
      </div>
      <div className='flex gap-5'>
      <Link to="/order">
        <button>
          <div className="flex justify-center items-center text-[1.5rem] text-white bg-kai h-[3rem]  rounded-[15px] w-[200px]   hover:bg-dark-kai px-5">
            <p>Confirm</p>
          </div>
        </button>
      </Link>
      <Link to="/shoppingcart">
        <button>
          <div className="flex justify-center items-center text-[1.5rem] text-white bg-kai h-[3rem]  rounded-[15px] w-[200px]   hover:bg-dark-kai px-5">
            <p>Cancel</p>
          </div>
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Order;
