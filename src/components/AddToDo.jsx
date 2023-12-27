const AddToDo = () => {
  return (
    <div className="px-4 py-2 hover:cursor-pointer mt-4 fixed bg-white dark:bg-secondary-color dark:text-white flex gap-2 items-center shadow-lg rounded-full">
      <span className="font-medium text-[0.95rem]">Add</span>
      <i class="fa-solid fa-plus"></i>
    </div>
  );
};

export default AddToDo;
