import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as menuService from '../api/postApi';
import { useMenu } from '../contexts/MenuContext';

function ModalCreateMenu() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const { closeEditModal, getMenu } = useMenu();
  const inputEl = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (!name && !description && !price) {
        return toast.error('name description price and image is required');
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

      await menuService.createMenu(formData);
      toast.success('create success');
      setName('');
      setDescription('');
      setPrice('');
      setImagePath(null);
      closeEditModal();
      getMenu();
    } catch (err) {
      return toast.error(err.response?.data.message);
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
    setName('');
    setDescription('');
    setPrice('');
    setImagePath(null);
    inputEl.current.value = null;
    closeEditModal();
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex flex-col items-center justify-center font-['Aclonica']">
      <form>
        <div className="bg-white  h-[600px] w-[500px] flex flex-col items-center justify-center gap-4 rounded-[50px] text-black">
          <div className="flex text-black justify-between text-3xl">
            <button>
              <p>Add menu</p>
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
                src={imagePath ? URL.createObjectURL(imagePath) : ''}
                alt="pic"
                className="h-[100px] w-[100px] object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <button
              className="text-[1.5rem] text-white bg-kai h-[3rem] w-32 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
              onClick={handleSubmit}
            >
              confirm
            </button>
            <Link to="/editmenu">
              <button
                className="text-[1.5rem] text-white bg-kai h-[3rem] w-32 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
                onClick={clear}
              >
                clear
              </button>
            </Link>
            <button
              className="text-[1.5rem] text-white bg-kai h-[3rem] w-32 rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai"
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

export default ModalCreateMenu;
