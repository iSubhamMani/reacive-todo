import { useSelector } from "react-redux";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import AddToDoModal from "./AddToDoModal";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;
  const { userInfo } = useSelector((store) => store.user);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (localStorage.getItem("theme") === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-bg-color-dark">
      <div className="min-h-[100vh] relative">
        <div className="px-4 py-3 flex items-center justify-between shadow-md ">
          <div className="flex items-center gap-2">
            <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
              <img src={userInfo?.photoURL} className="object-cover" alt="" />
            </div>
            <p className="text-[0.9rem] font-semibold text-primary-color dark:text-white">
              {userInfo?.displayName}
            </p>
          </div>
          <div>
            <div
              className="w-[20px] h-[20px] hover:cursor-pointer md:w-[24px] md:h-[24px] overflow-hidden"
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
            >
              <img src={theme === "light" ? dark : light} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center sticky top-0">
          <AddToDo />
        </div>
        <AddToDoModal />
      </div>
    </div>
  );
};

export default Home;
