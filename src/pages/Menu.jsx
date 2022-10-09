import { useMenu } from '../contexts/MenuContext';
import { createCart } from '../api/cartApi';

function Menu() {
  const { menu, getMenu } = useMenu();

  const handleAddCart = async (itemId) => {
    await createCart(itemId);
    getMenu();
  };

  return (
    <div className="bg-light-kai h-100 flex py-[20vh]   w-screen items-center justify-items-start flex-col  text-white ">
      <div className="w-screen px-[200px]">
        <div className="grid grid-cols-2 gap-3">
          {menu.map((item, idx) => (
            <div
              className="bg-menu w-[500px] h-[150px] rounded-[25px] flex items-center justify-between p-3 mt-3"
              key={idx}
              itemID={item.id}
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
                  className="text-[1.5rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                  onClick={() => handleAddCart({ menuId: item.id })}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
