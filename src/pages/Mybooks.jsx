import React from "react";
import Navbar from "../components/Navbar";
import CardComponent from "../components/CardComponent";
import GifForSearch from "../asserts/icons8-search.gif";
import { useDispatch } from "react-redux";
import { ToggleSearchBar } from "../store/Reducers/UserDetails";
import { Link } from "react-router-dom";
import { Toast } from "../components/utils/Toast";
const MyBooks = () => {
  const Bookvalue = JSON.parse(localStorage.getItem("BooksToShelf")) || [];
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Toast />
      {Bookvalue.length > 0 ? (
        <div className="md:px-10 md:pl-20 md:mt-32 pl-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 md:space-y-4 pb-10">
          {Bookvalue.map((value, i) => (
            <div key={i}>
              <CardComponent data={value} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center pt-72">
          <Link
            to="/"
            onClick={() => dispatch(ToggleSearchBar(true))}
            className="cursor-pointer w-72  flex flex-row items-center justify-center gap-x-1  rounded-xl bg-black px-6 py-3 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"
          >
            <img src={GifForSearch} alt="" className="w-8" />
            Start Searching 💫
          </Link>
        </div>
      )}
    </>
  );
};

export default MyBooks;
