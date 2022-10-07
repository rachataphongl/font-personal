import { useMenu } from '../../contexts/MenuContext';
import ModalCreateMenu from '../../Component/ModalCreateMenu';

function EditMenu() {
  const { menu, closeEdit, close } = useMenu();
  const oddNumber = menu.filter((item) => item.id % 2 !== 0);
  const evenNumber = menu.filter((item) => item.id % 2 === 0);
  // console.log(oddNumber);
  return (
    <>
      <div className="bg-light-kai h-100 flex p-[17vh]  w-screen items-center justify-items-start flex-col  text-white">
        <div className="flex items-start  gap-20">
          <div>
            {oddNumber.map((item, idx) => (
              <div
                className="bg-menu w-[450px] h-[150px] rounded-[25px] flex items-center justify-between p-3 mt-3"
                key={idx}
              >
                <div className="flex" style={{ minWidth: 100 }}>
                  <div className="bg-white w-[100px] h-[100px] text-black rounded-[25px] flex justify-center items-center">
                    <img
                      src={item.imagePath}
                      alt="food"
                      accept="image/*"
                      className="w-[100px] h-[100px] rounded-[25px]"
                    />
                  </div>
                  <div className="text-black m-5" style={{ minWidth: 100 }}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{`${item.price} B`}</div>
                  </div>
                </div>

                <div>
                  <button
                    className="text-[1.5rem] text-white bg-kai h-[3rem] w-32 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                    onClick={close}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            {evenNumber.map((item, idx) => (
              <div
                className="bg-menu w-[450px] h-[150px] rounded-[25px] flex items-center justify-between p-3 mt-3"
                key={idx}
              >
                <div className="flex" style={{ minWidth: 100 }}>
                  <div className="bg-white w-[100px] h-[100px] text-black rounded-[25px] flex justify-center items-center">
                    <img
                      src={item.imagePath}
                      alt="food"
                      accept="image/*"
                      className="w-[100px] h-[100px] rounded-[25px]"
                    />
                  </div>
                  <div className="text-black m-5" style={{ minWidth: 100 }}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{`${item.price} B`}</div>
                  </div>
                </div>

                <div>
                  <button className="text-[1.5rem] text-white bg-kai h-[3rem] w-32 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {closeEdit && <ModalCreateMenu />}
      </div>
    </>
  );
}

export default EditMenu;
