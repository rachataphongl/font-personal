import { useAuth } from '../contexts/AuthContext';

function ModalLogin() {
  const { closeLogin, openRegis } = useAuth();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 flex flex-col justify-center items-center font-['Aclonica']">
      <div className="bg-white h-[500px] w-[400px] flex flex-col items-center justify-center gap-12 rounded-[50px]">
        <div className="flex justify-between">
          <button className=" mx-10 text-xl underline decoration-[red]">
            <p className="">Login</p>
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
          />
        </div>
        <div>
          <div>Password</div>
          <input
            type="text"
            className="w-72  h-[2.5rem] rounded-[15px] px-2 bg-gray-200"
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
    </div>
  );
}

export default ModalLogin;
