import { useState } from 'react';
import { updateAmountApi } from '../../api/cartApi';
import { useCart } from '../../contexts/CartContext';
import { numberWithCommas } from '../../utils/functionStatic';

function OrderCart({ item, idx }) {
  const [countItems, setCountItems] = useState(1);
  const { setCart, cart, deleteCart } = useCart();

  const increaseItems = async () => {
    const newItem = { ...cart[idx], amount: cart[idx].amount + 1 };

    const newCart = [...cart];
    newCart.splice(idx, 1, newItem);

    await updateAmountApi({ cartId: item.id, amount: item.amount + 1 });
    setCart(newCart);
  };

  const decreaseItems = async () => {
    const newItem = { ...cart[idx], amount: cart[idx].amount - 1 };

    const newCart = [...cart];
    newCart.splice(idx, 1, newItem);

    await updateAmountApi({ cartId: item.id, amount: item.amount - 1 });
    setCart(newCart);
  };

  const decreaseAndRemove = (input, idx) => {
    deleteCart(input, idx);
    decreaseItems();
  };

  return (
    <>
      {countItems > 0 ? (
        <div className="bg-menu  w-[500px] h-[150px] rounded-[25px] flex items-center justify-between p-3 mt-3 ">
          <div className="flex" style={{ minWidth: 100 }}>
            <div className=" w-[100px] h-[100px] text-black rounded-[25px] ">
              <img
                src={item.Menu.imagePath}
                alt="food"
                accept="image/*"
                className="w-[100px] h-[100px] rounded-[25px] object-cover"
              />
            </div>
            <div className="text-black m-5" style={{ minWidth: 100 }}>
              <div>{item.Menu.name}</div>
              <div>{item.Menu.description}</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-5 items-center text-white">
              <button
                className="text-[1.5rem]  bg-gray-700 h-[3rem] w-20 rounded-[15px]   hover:bg-black"
                onClick={() => decreaseAndRemove(item.id, idx)}
              >
                -
              </button>
              <div className="text-black text-[1.5rem] mx-2">{item.amount}</div>
              <button
                className="text-[1.5rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]   hover:bg-dark-kai"
                onClick={() => increaseItems(item.id)}
              >
                +
              </button>
            </div>
            <div className="text-black text-[1.5rem] mx-2">{`${numberWithCommas(
              item.Menu.price * item.amount
            )} B`}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default OrderCart;
