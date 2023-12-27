import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../utils/slices/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUserInfo(user));
        navigate("/home");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Body;
