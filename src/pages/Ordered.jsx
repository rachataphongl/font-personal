import { useEffect, useState } from 'react';
import * as orderService from '../api/orderApi';
import { useCart } from '../contexts/CartContext';
import { useOrder } from '../contexts/OrderContext';

function Ordered() {
  const { setOrdered, ordered, getAllOrdered, approveOrder } = useOrder();
  const { setIsPending } = useCart();

  const [order, setOrder] = useState([]);

  // const getAllOrdered = async () => {
  //     const res = await orderService.getAllOrderedApi()
  //     setOrdered(res.data.orders)
  //     // console.log(res.data.orders)
  // }
  // console.log(order, 'aomaoma')

  useEffect(() => {
    try {
      getAllOrdered();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log(ordered);
  const confirmAndGetOrder = async (orderId) => {
    await approveOrder(orderId);
    setIsPending(false);
    getAllOrdered();

    // setOrder(getAllOrdered())
  };

  // let totalPriceWhenOrder = ordered.OrderItems.priceWhenOrder
  // console.log(ordered);

  // console.log(ordered[0].OrderItems[0].priceWhenOrder);

  // let total = ordered.map(item => item.OrderItems.map(item => item.amount * item.priceWhenOrder).reduce((acc, cur) => acc + cur, 0))

  // console.log(total)

  return (
    <div className="bg-light-kai h-100 flex py-[17vh]   w-screen items-center justify-items-start flex-col  text-white font-[Aclonica] gap-3">
      {ordered.length > 0 ? (
        <>
          {ordered?.map((item, idx) => (
            <div
              key={item.id}
              idx={idx}
              className="flex flex-col-reverse items-center justify-between text-[2rem] text-black bg-menu h-[300px] w-[1000px] rounded-[50px] px-3 py-5 select-none"
            >
              <div className="flex relative -left-[70px]">
                <div className="w-[150px] h-[50px] flex relative right-[60px] -top-[175px]">
                  <img
                    src={item.slipUrl}
                    className="w-[150px] h-[200px] rounded-[20px]"
                  />
                </div>
                <div className="flex gap-[35px]">
                  <div>{item.payMentStatus}</div>
                  <button
                    className="text-[25px]  text-white bg-kai h-[3rem] rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                    onClick={() => confirmAndGetOrder({ id: item.id })}
                  >
                    Approve
                  </button>
                  {/* <button className="text-[25px]  text-white bg-kai h-[3rem] rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai">Reject</button> */}
                  <div className="flex justify-center gap-5">
                    <p className="flex items-center text-base">Total</p>
                    {item.OrderItems.map(
                      (item) => item.amount * item.priceWhenOrder
                    ).reduce((acc, cur) => acc + cur, 0)}
                    &nbsp;B
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center ">{item.User.username}</div>
                <div className="flex justify-between  w-[500px] bg-white rounded-xl text-xl">
                  <div>
                    {item.OrderItems.map((item) => (
                      <div key={item.id}>{item.Menu.name}</div>
                    ))}
                  </div>
                  <div>
                    {item.OrderItems.map((item) => (
                      <div key={item.id}>{item.priceWhenOrder}&nbsp;B</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="flex  items-center justify-center text-[2rem] text-black bg-menu h-[100px] w-[350px] rounded-[50px] px-3 py-5 select-none">
            Don't have Order
          </div>
        </>
      )}
    </div>
  );
}

export default Ordered;
