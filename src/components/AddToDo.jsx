import { useDispatch } from "react-redux";
import { setShowModal } from "../utils/slices/appSlice";

const AddToDo = () => {
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(setShowModal(true));
  };

  return (
    <div
      onClick={handleShowModal}
      className="px-4 py-2 hover:cursor-pointer mt-4 bg-white dark:bg-secondary-color dark:text-white flex gap-2 items-center shadow-lg rounded-full"
    >
      <span className="font-medium text-[0.95rem]">Add</span>
      <i class="fa-solid fa-plus"></i>
    </div>
  );
};

export default AddToDo;
