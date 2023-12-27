import { GOOGLE_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import Footer from "./Footer";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleUserLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="px-4 py-3 min-h-[100vh] flex flex-col">
      <div className="flex-1">
        <div>
          <h1 className="text-primary-color text-xl font-bold">
            Reactive ToDo
          </h1>
        </div>
        <div className="mt-[14%] md:mt-[5%]">
          <p className="text-4xl text-primary-color font-medium">
            Make your tasks reactive with{" "}
            <span className="text-secondary-color">Reactive ToDo</span>
          </p>
        </div>
        <div className="flex flex-col items-center mt-[40%] md:mt-[15%]">
          <div>
            <p className="text-xl text-primary-color font-medium">
              Create your account
            </p>
          </div>
          <div className="mt-2">
            <button
              onClick={handleUserLogin}
              className="flex items-center gap-2 shadow-lg px-4 py-2 text-secondary-color rounded-full font-semibold
            hover:bg-secondary-color hover:text-white transition duration-200 ease-in-out"
            >
              <div className="w-[24px] h-[24px] overflow-hidden">
                <img src={GOOGLE_ICON} alt="Icon" />
              </div>
              Continue with Google
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
