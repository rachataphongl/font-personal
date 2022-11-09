import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../contexts/CartContext';
import * as orderService from '../api/orderApi';
import { useOrder } from '../contexts/OrderContext';

function ModalPayment({ getCartByUserId }) {
  const { totalPrice } = useCart();
  const { getAllOrdered } = useOrder();

  const [slipUrl, setSlipUrl] = useState(null);
  const {
    setIsOpenModalPayment,
    handleProcess,
    setIsPending,
    getOrderById,
    isOpenModalModalPayment
  } = useCart();
  const inputEl = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append('totalPrice', totalPrice);

      if (!slipUrl) {
        return toast.error('Slip is required');
      }
      if (slipUrl) {
        formData.append('slipUrl', slipUrl);
      }

      await orderService.createOrder(formData);

      // getCartByUserId();
      setIsPending(true);
      // getOrderById();
      await getAllOrdered();
      setIsOpenModalPayment(false);
      console.log(isOpenModalModalPayment);
      console.log('first');
      // window.location.assign('/')
      toast.success('Yeah!!!');
    } catch (err) {
      console.log(err);
    }
  };

  const closeModalPayment = () => {
    setIsOpenModalPayment(false);
    setSlipUrl(null);

    inputEl.current.value = null;
  };

  const clearData = () => {
    setSlipUrl(null);
    inputEl.current.value = null;
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex flex-col items-center justify-center font-['Aclonica']">
      <form>
        <div className="bg-white  h-[500px] w-[400px] flex flex-col items-center justify-center gap-4 rounded-[50px] text-black">
          <div className="flex text-black justify-between text-3xl"></div>

          <div className="flex flex-col items-center">
            <div className="text-2xl">Your Slip</div>
            <div>
              <div>
                <input
                  type="file"
                  className="w-72  h-[2rem] rounded-[15px] px-2 "
                  ref={inputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setSlipUrl(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
            <div className="h-[250px] w-[200px] bg-gray-700">
              <img
                src={
                  typeof slipUrl === 'string' || slipUrl === null
                    ? slipUrl
                    : URL.createObjectURL(slipUrl)
                }
                alt="slip"
                className="object-cover h-[250px] w-[200px]"
              />
            </div>
          </div>
          <button className="text-[1rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai flex items-center justify-center">
            {totalPrice}
          </button>

          <div className="flex items-center justify-between gap-5">
            <button
              className="text-[1rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
              onClick={handleSubmit}
            >
              confirm
            </button>
            <Link>
              <button
                className="text-[1rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                onClick={clearData}
              >
                clear
              </button>
            </Link>

            <button
              className="text-[1rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
              type="button"
              onClick={closeModalPayment}
            >
              close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalPayment;
