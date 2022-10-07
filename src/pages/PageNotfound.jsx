import Adang from '../img/notound/Adang.jpeg';

function PageNotfound() {
  return (
    <div className="bg-light-kai h-100 flex p-[20vh]  w-screen items-center justify-items-start flex-col gap-24 text-white">
      <div>
        <h1>Page not found :( </h1>
        <img
          src={Adang}
          alt="Kra-tuk-Jit-Kra-chark-Jai"
          accept="image/*"
          className="h-65 rounded-[50px]"
        />
      </div>
    </div>
  );
}

export default PageNotfound;
