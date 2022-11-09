import { Link, useLocation, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { numberWithCommas } from '../utils/functionStatic';
import { useEffect, useState } from 'react';
import ModalPayment from '../Component/ModalPayment';
import { useOrder } from '../contexts/OrderContext';
import * as orderService from '../api/orderApi';
import * as cartService from '../api/cartApi';

function Order() {
  const {
    cart,
    totalPrice,
    setIsOpenModalPayment,
    isOpenModalModalPayment,
    isPending,
    getOrderDetail
  } = useCart();
  const { user } = useAuth();
  const { userId } = useParams();
  const [orderIsPending, setOrderIsPending] = useState(false);
  const { pathname } = useLocation();

  // if (pathname !== userId) {
  //   setOrderIsPending(true);
  // }
  // const pending = isPending === orderIsPending;
  // console.log(isPending === orderIsPending);
  // if (!pending) {
  //   setOrderIsPending(true);
  //   console.log('first');
  // }

  // if (!pending) {
  //   setOrderIsPending(false);
  // }

  const [orderById, setOrderBtId] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const getOrderById = async () => {
    try {
      const res = await orderService.getOrderByIdApi();
      setOrderBtId(res?.data.orderById);
      setOrderItems(res?.data.orderById.OrderItems);
    } catch (err) {
      console.log(err);
    }
  };

  let totoPriceWhenOrder = orderItems
    ?.map((item) => item.amount * item.priceWhenOrder)
    .reduce((acc, cur) => acc + cur, 0);

  const getCartByUserId = async () => {
    try {
      if (pathname !== userId) {
        setOrderIsPending(true);
      }
      await cartService.getCartByUserIdApi();
    } catch (err) {
      console.log(err);
    }
  };

  const handleModalPayment = () => {
    setIsOpenModalPayment((prev) => !prev);
  };
  useEffect(() => {
    try {
      getOrderById();
      getCartByUserId();
      getOrderDetail();
      console.log('yyyyyyy');
    } catch (err) {
      console.log(err);
    }
  }, [userId, isPending, orderIsPending]);

  // console.log(isOpenModalModalPayment)

  // const pay = () => {
  //   toast.success(' เรื่องบิลอะผมหลอก จริง ๆ ผมแจกฟรี เชิญกินให้เต็มที่!!!')
  // }

  return (
    <div className="bg-light-kai h-100 flex pt-[20vh] w-screen items-center justify-items-start flex-col  text-white font-['Aclonica'] gap-10">
      <div className="flex flex-col items-center justify-between text-[2rem] text-black bg-menu h-[550px] w-[550px] rounded-[50px] px-3 py-5 select-none">
        {orderById ? (
          <>
            <div className="flex flex-col  text-[1rem] w-[500px] justify-between">
              <div className="flex justify-center text-[2.5rem]">
                Order's&nbsp;&nbsp;{user.username}
              </div>
              {orderItems.map((item, idx) => (
                <>
                  <div
                    key={item.id}
                    className="flex justify-between h-[2.5rem] bg-white my-1 rounded-[10px] items-center px-2"
                  >
                    <div>
                      {item.Menu.name}&nbsp;*&nbsp;{item.amount}
                    </div>
                    <div>
                      {numberWithCommas(item.Menu.price * item.amount)}&nbsp;B
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex justify-center bottom-[160px]">
              <div className="flex justify-between items-center text-[2rem] text-black bg-kai h-[5rem] w-[300px] rounded-[25px] px-5 select-none">
                <p className="text-xl">Total&nbsp;</p>
                {numberWithCommas(totoPriceWhenOrder)}
                &nbsp; B
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col  text-[1rem] w-[500px] justify-between">
              <div className="flex justify-center text-[2.5rem]">
                Order's&nbsp;&nbsp;{user.username}
              </div>
              {cart.map((item, idx) => (
                <>
                  <div
                    key={item.id}
                    className="flex justify-between h-[2.5rem] bg-white my-1 rounded-[10px] items-center px-2"
                  >
                    <div>
                      {item.Menu.name}&nbsp;*&nbsp;{item.amount}
                    </div>
                    <div>
                      {numberWithCommas(item.Menu.price * item.amount)}&nbsp;B
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex justify-center bottom-[160px]">
              <div className="flex justify-between items-center text-[2rem] text-black bg-kai h-[5rem] w-[300px] rounded-[25px] px-5 select-none">
                <p className="text-xl">Total&nbsp;</p>
                {numberWithCommas(totalPrice)}
                &nbsp; B
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center gap-5">
        {!isPending ? (
          <>
            <button onClick={() => handleModalPayment()}>
              <div className="flex justify-center items-center text-[1.5rem] text-white bg-kai h-[3rem]  rounded-[15px] w-[200px]   hover:bg-dark-kai px-5">
                <p>Confirm</p>
              </div>
            </button>

            <Link to="/shoppingcart">
              <button>
                <div className="flex justify-center items-center text-[1.5rem] text-white bg-kai h-[3rem]  rounded-[15px] w-[200px]   hover:bg-dark-kai px-5">
                  <p>Cancel</p>
                </div>
              </button>
            </Link>
          </>
        ) : (
          <>
            <div>
              <div className="flex justify-center items-center text-[1.5rem] text-white bg-kai h-[3rem]  rounded-[15px] w-[200px] select-none  px-5">
                <p>Pending...</p>
              </div>
            </div>
          </>
        )}
      </div>
      {isOpenModalModalPayment && (
        <ModalPayment
          getCartByUserId={getCartByUserId}
          getOrderById={getOrderById}
        />
      )}
    </div>
  );
}

export default Order;

// {[]?.map((item, idx) => (
//   <div
//     key={item.id}
//     idx={idx}
//     className="flex flex-col-reverse items-center justify-between text-[2rem] text-black bg-menu h-[550px] w-[550px] rounded-[50px] px-3 py-5 select-none"
//   >
//     <div className="flex gap-[35px]">
//       <div className="flex justify-center gap-5">
//         <p className="flex items-center text-base">Total</p>
//         {item.OrderItems.map(
//           (item) => item.amount * item.priceWhenOrder
//         ).reduce((acc, cur) => acc + cur, 0)}
//         &nbsp;B
//       </div>
//     </div>
//     <div>
//       <div className="flex justify-center ">
//         {item.User.username}
//       </div>
//       <div className="flex justify-between  w-[500px] bg-white rounded-xl text-xl">
//         <div>
//           {item.OrderItems.map((item) => (
//             <div key={item.id}>{item.Menu.name}</div>
//           ))}
//         </div>
//         <div>
//           {item.OrderItems.map((item) => (
//             <div key={item.id}>{item.priceWhenOrder}&nbsp;B</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
