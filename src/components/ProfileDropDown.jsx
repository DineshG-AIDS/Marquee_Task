import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../asserts/UserIcon.png";
import BookIcon from "../asserts/BookIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { ChangeUserName } from "../store/Reducers/UserDetails";
const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const UserDetails = useSelector((state) => state.User);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber;
  const UserDetailGenerateHandler = () => {
    randomNumber = getRandomInt(1, 100);
    dispatch(ChangeUserName(`Marquee User_${randomNumber}`));
  };

  return (
    <>
      <div
        ref={buttonRef}
        className="border-2 border-[#1353fe] rounded-3xl ] bg-black/75 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          onClick={() => {
            UserDetails.UserAccount.length > 1
              ? console.log(UserDetails.UserAccount) 
              : UserDetailGenerateHandler();
          }}
          src={`https://robohash.org/${
            UserDetails.UserAccount.length > 1
              ? UserDetails.UserAccount
              : `Marquee User_${randomNumber}`
          }`}
          alt="logo"
          className="w-12 p-1 "
        />
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className=" absolute top-16 z-50 p-2 rounded-xl text-[#1353fe] w-52 font-sans font-semibold dark:text-[#e7e8eb] pt-1 right-10 bg-gray-200 dark:bg-[#1353fe]"
        >
          <div className="flex flex-col gap-y-3 pl-2 pr-2">
            <Link className="cursor-pointer flex flex-row gap-x-0.5 items-center">
              <img src={UserIcon} className="w-8 h-8" />
              {UserDetails.UserAccount.length > 1
                ? UserDetails.UserAccount
                : `Marquee User_${randomNumber}`}
            </Link>
            <Link
              to="/login"
              className="cursor-pointer flex flex-row gap-x-1.5 items-center"
            >
              {" "}
              <img src={BookIcon} className="w-8 h-8" />
              My Bookshelf
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropDown;
