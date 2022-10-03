import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

function ModalLogin() {
  const [input, setInput] = useState({
    phoneNumberOrEmail: '',
    password: ''
  });
  const { closeLogin, openRegis, openLogin, login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      toast.success('success login');
    } catch (err) {
      // toast.error(err.response.data.message);
      toast.error('phone number or email or password  is invalid');
    }
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 flex flex-col justify-center items-center font-['Aclonica']">
      <form onSubmit={handleSubmitForm}>
        <div className="bg-white h-[500px] w-[400px] flex flex-col items-center justify-center gap-12 rounded-[50px]">
          <div className="flex justify-between">
            <button
              className=" mx-10 text-xl underline decoration-[red]"
              onClick={() => {
                openLogin();
                closeLogin();
              }}
            >
              <p>Login</p>
            </button>
            <button
              onClick={() => {
                closeLogin();
                openRegis();
              }}
              className=" mx-10 text-xl"
            >
              <p>Sign Up</p>
            </button>
          </div>
          <div>
            <div>Phone or Email</div>
            <input
              type="text"
              className="w-72 h-[2.5rem] rounded-[15px] px-2 bg-gray-200"
              name="phoneNumberOrEmail"
              value={input.phoneNumberOrEmail}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type="text"
              className="w-72  h-[2.5rem] rounded-[15px] px-2 bg-gray-200"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button
              onClick={closeLogin}
              className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-10  hover:bg-dark-kai"
            >
              <p className="text-xl">Cancel</p>
            </button>
            <button className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-10  hover:bg-dark-kai">
              <p className="text-xl">Login</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalLogin;
