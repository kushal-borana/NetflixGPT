import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Netflic_GPT_BACKGROUND, Netflic_GPT_LOGO, Netflic_GPT_USERPROFILEURL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormType = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = (email, password) => {
    const message = checkValidData(email.current.value, password.current.value);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              Netflic_GPT_USERPROFILEURL
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black">
        <img
          className="relative w-screen h-screen object-cover opacity-50"
          src={Netflic_GPT_BACKGROUND}
          alt="Background"
        />
        <div className="absolute w-3/12 h-4/5">
          <div className="absolute  bg-black opacity-70 w-full h-full"></div>
          <div className="w-full h-full flex justify-center">
            <form
              className="rounded-md absolute px-20 pt-20 flex flex-col w-full h-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <p className="text-4xl w-full pb-8 font-bold text-white">
                  {isSignIn ? "Sign In" : "Sign Up"}
                </p>
              </div>
              <div className="w-full pb-3 flex flex-col py-2">
                {!isSignIn && (
                  <div className=" w-full pb-2">
                    <input
                      ref={name}
                      className="border text-white border-gray-500 rounded-md bg-transparent p-4 w-full h-full"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                )}
                <div className="w-full pb-2">
                  <input
                    ref={email}
                    className="border border-gray-500 rounded-md bg-transparent p-4 w-full h-full text-white"
                    type="text"
                    placeholder="Email or mobile number"
                  />
                </div>
                <div className=" w-full pb-2">
                  <input
                    ref={password}
                    className="border text-white border-gray-500 rounded-md bg-transparent p-4 w-full h-full"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <p className="w-full pt-6 font-bold text-red-400 text-xl">
                    {errorMessage}
                  </p>
                </div>
              </div>
              <div className="w-full h-12">
                <button
                  className="bg-red-600 rounded-md w-full h-full text-xl text-white"
                  onClick={() => handleButtonClick(email, password)}
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
              </div>
              {isSignIn && (
                <>
                  <p className="w-full pt-3 text-gray-400 text-xl text-center">
                    OR
                  </p>
                  <div className="w-full h-12">
                    <button className="w-full h-full text-xl text-white">
                      Forget Password?
                    </button>
                  </div>
                  <div className="w-full text-xl text-white flex">
                    <input type="checkbox" className="bg-red-600" />
                    <p className="ml-2">Remember me</p>
                  </div>
                </>
              )}
              {isSignIn ? (
                <>
                  <div className="flex w-full">
                    <p className="pt-3 text-gray-400 text-lg">
                      New to Netflix?
                    </p>
                    <p
                      className="pt-3 cursor-pointer pl-1 text-xl text-white"
                      onClick={() => handleFormType()}
                    >
                      Sign up now.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full">
                    <p className="pt-3 text-gray-400 text-lg">
                      Already a member?
                    </p>
                    <p
                      className="pt-3 cursor-pointer pl-1 text-xl text-white"
                      onClick={() => handleFormType()}
                    >
                      Sign in now.
                    </p>
                  </div>
                </>
              )}
              <div>
                <p className="w-full pt-6 text-gray-400 text-md">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. Learn more.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
