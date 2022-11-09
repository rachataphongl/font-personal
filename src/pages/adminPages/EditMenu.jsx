import { useState } from 'react';
import { useMenu } from '../../contexts/MenuContext';
import ModalCreateMenu from '../../Component/ModalCreateMenu';
import ModalEditMenu from '../../Component/ModalEditMenu';
import { numberWithCommas } from '../../utils/functionStatic';

function EditMenu() {
  const { menu, closeEdit, deleteMenu, handleEdit, openEdit } = useMenu();

  const [selectId, setSelectId] = useState();
  console.log(menu);
  return (
    <div className="bg-light-kai h-100 flex py-[17vh]   w-screen items-center justify-items-start flex-col  text-white ">
      <div className="w-screen px-[200px]">
        <div className="grid grid-cols-2 gap-3">
          {menu.map((item, idx) => (
            <div
              className="bg-menu w-[500px] h-[150px] rounded-[25px] flex items-center justify-between p-3 mt-3"
              key={idx}
              itemID={item.id}
            >
              <div className="flex">
                <div className="bg-white w-[100px] h-[100px] text-black rounded-[25px] flex justify-center items-center">
                  <img
                    src={item.imagePath}
                    alt="food"
                    accept="image/*"
                    className="w-[100px] h-[100px] rounded-[25px] object-cover"
                  />
                </div>
                <div className="text-black m-5">
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                  <div>{`${numberWithCommas(item.price)} B`}</div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[1rem]">
                <button
                  className=" text-white bg-kai h-[3rem] w-16 mx-3 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                  onClick={() => {
                    handleEdit(item);
                    setSelectId(item.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className=" text-white bg-yellow-500 h-[3rem] w-16 rounded-[15px]  font-['Aclonica'] hover:bg-yellow-700"
                  onClick={() => deleteMenu(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {closeEdit && <ModalCreateMenu />} */}
      {openEdit && <ModalEditMenu id={selectId} />}
    </div>
  );
}

export default EditMenu;
