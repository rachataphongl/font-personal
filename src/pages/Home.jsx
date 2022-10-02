import mama from '../img/imgFood/mama.webp';
import kaiARoi from '../img/imgFood/IMG_8648.JPG';
import ModalLogin from '../Component/ModalLogin';
import { useAuth } from '../contexts/AuthContext';
import ModalRegister from '../Component/ModalRegister';

function Home() {
  const { isOpen } = useAuth();

  return (
    <div className="bg-light-kai h-85 flex items-center justify-center flex-col gap-24">
      <div>
        <p className="text-white text-7xl font-['Aclonica']">RECOMMEND</p>
      </div>

      <div className="justify-items-center flex flex-wrap gap-40">
        <div to="/">
          <img
            src={kaiARoi}
            alt="mama"
            accept="image/*"
            className="w-[25rem] h-[20rem]  rounded-[50px] flex flex-shrink-0 shadow-2xl "
          />
        </div>
        <div>
          <img
            src={mama}
            alt="mama"
            accept="image/*"
            className="w-[25rem] h-[20rem]  rounded-[50px] flex flex-shrink-0 shadow-2xl "
          />
        </div>
      </div>
      {isOpen && <ModalLogin />}
      {<ModalRegister />}
    </div>
  );
}

export default Home;
