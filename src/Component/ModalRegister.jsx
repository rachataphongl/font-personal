import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { validateRegister } from '../validations/userValidate';
import { toast } from 'react-toastify';

function ModalRegister() {
  const { isOpenRegis, closeRegis, openLogin, register } = useAuth();
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpenRegis) {
    return null;
  }

  const openLoginModal = () => {
    closeRegis();
    openLogin();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    // console.log(value);
    // console.dir(error);
    if (error) {
      return toast.error(error.message);
    }
    try {
      await register(input);
      toast.success('success register');
      closeRegis();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex flex-col items-center justify-center font-['Aclonica']">
      <form onSubmit={handleSubmitForm}>
        <div className="bg-white  h-[600px] w-[800px] flex flex-col items-center justify-center gap-4 rounded-[50px] ">
          <div className="flex justify-between gap-40 text-3xl">
            <button onClick={openLoginModal} className=" mx-10  ">
              <p>Login</p>
            </button>
            <button className=" mx-10  underline decoration-[red]">
              <p>Sign Up</p>
            </button>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div>
              <div>First name</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.firstName}
                name="firstName"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div>Last name</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.lastName}
                name="lastName"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div>
              <div>Username</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.userName}
                name="username"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div>Email</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.email}
                name="email"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div>
              <div>Phone number</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div>Address</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.address}
                name="address"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div>
              <div>Password</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.password}
                name="password"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div>Confirm password</div>
              <input
                type="text"
                className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
                value={input.confirmPassword}
                name="confirmPassword"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-16">
            {/* <div>
            <div>role</div>
            <div className="flex gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="customer"
                  name="role"
                  value="customer"
                  className="w-5  h-[2rem] rounded-[15px] px-2 bg-gray-200 "
                />
                <span for="customer">customer</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="rider"
                  name="role"
                  value="rider"
                  className="w-5  h-[2rem] rounded-[15px] px-2 bg-gray-200 "
                />
                <span for="rider">rider</span>
              </div>
            </div>
          </div> */}
          </div>
          <div>
            <button
              onClick={closeRegis}
              className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-10  hover:bg-dark-kai"
            >
              <p className="text-xl">Cancel</p>
            </button>
            <button className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-10  hover:bg-dark-kai">
              <p className="text-xl">Sign Up</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalRegister;
