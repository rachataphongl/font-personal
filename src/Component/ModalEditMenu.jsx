import { useRef, useState } from 'react';
import { useMenu } from '../contexts/MenuContext';
import { toast } from 'react-toastify';
// import * as menuService from '../api/postApi';
import { Link } from 'react-router-dom';

function ModalEditMenu({ id }) {
  const { closeEditModal, editMenu, sendUpdateMenu, setOpenEdit } = useMenu();
  const [name, setName] = useState(editMenu?.name);
  const [description, setDescription] = useState(editMenu?.description);
  const [price, setPrice] = useState(editMenu?.price);
  const [imagePath, setImagePath] = useState(editMenu?.imagePath);
  const inputEl = useRef();

  const updateMenu = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (!name && !name.trim()) {
        return toast.error('name is required');
      }

      if (!description && !description.trim()) {
        return toast.error('description is required');
      }

      if (!price && !price.trim()) {
        return toast.error('price is required');
      }

      if (name) {
        formData.append('name', name);
      }

      if (description) {
        formData.append('description', description);
      }

      if (price) {
        formData.append('price', price);
      }

      if (imagePath) {
        formData.append('image', imagePath);
      }

      sendUpdateMenu(id, formData);
    } catch (err) {
      console.log(err);
    }
  };

  const clear = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImagePath(null);
    inputEl.current.value = null;
  };

  const clearAndClose = () => {
    closeEditModal();
  };

  const sendAndClose = (e) => {
    updateMenu(e);
    setOpenEdit(false);
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex flex-col items-center justify-center font-['Aclonica']">
      <form>
        <div className="bg-white  h-[600px] w-[500px] flex flex-col items-center justify-center gap-4 rounded-[50px] text-black">
          <div className="flex text-black justify-between text-3xl">
            <button>
              <p>Edit menu</p>
            </button>
          </div>
          <div>
            <div>name</div>
            <input
              type="text"
              className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div>description</div>
            <input
              type="text"
              className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <div>price</div>
            <input
              type="text"
              className="w-72  h-[2rem] rounded-[15px] px-2 bg-gray-200"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <div>
              <div>image</div>

              <input
                type="file"
                className="w-72  h-[2rem] rounded-[15px] px-2 "
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setImagePath(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div className="h-[100px] w-[100px] bg-gray-700">
              <img
                src={
                  typeof imagePath === 'string' || imagePath === null
                    ? imagePath
                    : URL.createObjectURL(imagePath)
                }
                alt="pic"
                className="h-[100px] w-[100px] object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <button
              className="text-[1.5rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
              onClick={sendAndClose}
            >
              confirm
            </button>
            <Link to="/editmenu">
              <button
                className="text-[1.5rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                onClick={clear}
              >
                clear
              </button>
            </Link>

            <button
              className="text-[1.5rem] text-white bg-kai h-[3rem] w-20 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
              onClick={clearAndClose}
            >
              close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalEditMenu;
