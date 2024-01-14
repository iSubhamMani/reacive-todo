import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import closeBtn from "../assets/close.png";
import { setShowModal } from "../utils/slices/appSlice";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/fireStore";

const AddToDoModal = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((store) => store.app);
  const user = useSelector((store) => store.user);

  const [title, setTitle] = useState(null);
  const [dueDate, setDueDate] = useState(
    new Date().toLocaleDateString("fr-ca")
  );

  const handleForm = async () => {
    if (!title) return;

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", user?.userInfo?.uid));
    const querySnapshot = await getDocs(q);

    const currentUser = querySnapshot.docs[0].id;

    try {
      const doc = await addDoc(collection(db, `users/${currentUser}/toDos`), {
        title: title,
        dueDate: dueDate,
      });

      if (doc) dispatch(setShowModal(false));
    } catch (error) {
      console.log("Error adding document");
    }
  };

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    showModal && (
      <dialog
        open
        id="modal"
        className="mt-[5%] py-4 px-6 shadow-lg rounded-lg w-[80%] max-w-[700px]"
      >
        <form>
          <div className="flex justify-between items-center border-b-[1px] mb-6 pb-2 border-gray-200">
            <h3 className="font-bold text-lg">New ToDo</h3>
            <img
              onClick={closeModal}
              className="w-[1rem] h-[1rem] cursor-pointer hover:bg-gray-100"
              src={closeBtn}
              alt="close"
            />
          </div>

          <div className="my-6">
            <label className="block mb-2 font-medium" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g: watch a movie"
              className="w-full px-4 py-2 border-2 border-gray-200 active:outline-black focus:outline-black rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium" htmlFor="due-date">
              Due Date
            </label>
            <input
              id="due-date"
              type="date"
              required
              onChange={(e) => setDueDate(e.target.value)}
              defaultValue={new Date().toLocaleDateString("fr-ca")}
              min={new Date().toLocaleDateString("fr-ca")}
              className="w-full rounded-lg px-4 py-2 border-2 border-gray-200 active:outline-black focus:outline-black"
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleForm();
              }}
              className="px-4 py-2 bg-black w-full text-white font-bold rounded-lg"
            >
              Add
            </button>
          </div>
        </form>
      </dialog>
    )
  );
};

export default AddToDoModal;
