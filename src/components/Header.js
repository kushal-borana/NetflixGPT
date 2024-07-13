import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflic_GPT_LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { isGptSuggestionOpen } from "../utils/gptSlice";
import { currentLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isGPTSearchOpen = useSelector((store) => store.gpt.openGptSuggestions);

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!isGPTSearchOpen) {
      dispatch(currentLanguage('en'));
    }
  }, [isGPTSearchOpen, dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  const handleGptSuggestion = () => {
    dispatch(isGptSuggestionOpen());
  };

  const handleLanguageChange = (e) => {
    dispatch(currentLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 grid grid-cols-12 justify-between bg-gradient-to-b from-black">
      <div className="col-start-3 pt-4">
        <img className="w-full" src={Netflic_GPT_LOGO} alt="Logo" />
      </div>
      {user && (
        <div className="col-start-9 col-end-12 justify-between">
          <div className="flex pt-4">
            {isGPTSearchOpen && (
              <select
                className="text-white border border-gray-500 bg-black bg-opacity-65 cursor-pointer mx-2 px-4 text-lg rounded-md font-semibold"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGE.map((language) => (
                  <option value={language.identifier} key={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="text-white bg-red-600 cursor-pointer mx-2 px-4 text-lg rounded-md font-semibold"
              onClick={handleGptSuggestion}
            >
              {isGPTSearchOpen ? "GPT Suggestion" : "Home Page"}
            </button>
            <img className="w-12 h-12" src={user.photoURL} alt="userImage" />
            <button
              className="font-bold text-red-900 text-xl"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
