import React, { useEffect, useState } from "react";
import EditionIcon from "../asserts/VersionIcon.png";
import AuthorIcon from "../asserts/AuthonIcon.png";
import YearIcon from "../asserts/YearIcon.png";
import LanguageIcon from "../asserts/TranlateIcon.png";
import BorrowIcon from "../asserts/BorrowIcon.png";
import AddIcon from "../asserts/AddIcon.png";
import { useDispatch } from "react-redux";
import { AddBookToShelf } from "../store/Reducers/UserDetails";
import { ErrorToast, showToast } from "./utils/Toast";
import RemoveIcon from "../asserts/RemoveIcon.png";
import { useNavigate } from "react-router";
const CardComponent = ({ data }) => {
  const dispatch = useDispatch();
  const [DummyState, SetDummyState] = useState(false);
  const Navigate = useNavigate();
  const AddingFunction = () => {
    const dataForDispatch = {
      ...data,
      addedToShelf: true,
    };
    console.log(dataForDispatch);
    const booksFromShelf =
      JSON.parse(localStorage.getItem("BooksToShelf")) || [];

    const isBookAlreadyAdded = booksFromShelf.some(
      (book) => book.cover_i === data.cover_i
    );

    if (isBookAlreadyAdded) {
      ErrorToast("Already Added");
    } else {
      dispatch(AddBookToShelf(dataForDispatch));

      const updatedBookshelf = [...booksFromShelf, dataForDispatch];
      localStorage.setItem("BooksToShelf", JSON.stringify(updatedBookshelf));

      showToast("Added successfully");
    }
  };

  const RemoveFromShelfFunction = () => {
    showToast("Removed successfully");

    const booksFromShelf =
      JSON.parse(localStorage.getItem("BooksToShelf")) || [];

    const updatedBookshelf = booksFromShelf.filter(
      (book) => book.cover_i !== data.cover_i
    );
    localStorage.setItem("BooksToShelf", JSON.stringify(updatedBookshelf));
    SetDummyState(true);

  };
  
  const isBookAlreadyAdded = () => {
    const booksFromShelf =
      JSON.parse(localStorage.getItem("BooksToShelf")) || [];
    return booksFromShelf.some((book) => book.cover_i === data.cover_i);
  };

  return (
    <>
      {" "}
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-xl border">
        <div className="relative ">
          <div className="flex justify-center">
            <img
              className="w-full h-[30rem]   rounded-xl"
              src={`https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg`}
              alt="Colors"
            />
          </div>
          <div className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            <p className="flex flex-row items-center gap-x-2 ">
              {data?.ebook_access === "borrowable"
                ? "Available"
                : "Not Available"}
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/emoji/48/headphone-emoji.png"
                alt="headphone-emoji"
              />
            </p>
          </div>
        </div>
        <h1
          className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer truncate"
          title={data?.title}
        >
          {data?.title}
        </h1>
        <div className="my-4">
          <div className="flex space-x-1  items-center font-medium font-sans">
            <span>
              <img src={AuthorIcon} alt="" className="w-7" />
            </span>
            {/* <p>by {data?.author_name[0]}</p> */}
          </div>
          <div className="flex space-x-1 items-center pt-2">
            <span>
              <img src={EditionIcon} alt="" className="w-6" />
            </span>
            <p>{data?.edition_key?.length} Editions</p>
          </div>
          <div className="flex space-x-1 items-center pt-2">
            <span>
              <img src={YearIcon} alt="" className="w-7" />
            </span>
            <p>First published in {data?.first_publish_year} </p>
          </div>
          <div className="flex space-x-1 items-center pt-2">
            <span>
              <img src={LanguageIcon} alt="" className="w-7" />
            </span>
            <p>
              {data?.language?.length > 1 ? data?.language?.length : 1}{" "}
              {data?.language?.length > 1 ? "Languages" : "Language"}
            </p>
          </div>
          <div className=" flex flex-row  items-center gap-x-3">
            {
              <a
                // href={`https://openlibrary.org/account/login?redirect=/books/${data?.cover_edition_key}/${data?.title}/borrow?action=borrow`}
                href={
                  data?.ebook_access === "borrowable" &&
                  `https://openlibrary.org${data?.key}${data?.title}?edition=key%3A/books/${data?.cover_edition_key}`
                }
                target="blank"
                className={`mt-4 text-lg font-sans flex flex-row items-center justify-center gap-x-2 font-semibold w-full text-white ${
                  data?.ebook_access === "borrowable"
                    ? "bg-[#1353fe] cursor-pointer transform hover:scale-105 transition duration-500"
                    : "bg-red-600 cursor-default"
                } py-2 rounded-xl shadow-lg `}
              >
                {data?.ebook_access === "borrowable" ? (
                  <span className=" flex  flex-row items-center gap-x-3">
                    Borrow
                    <img src={BorrowIcon} alt="" className="w-6 h-6" />
                  </span>
                ) : (
                  "Not Available"
                )}
              </a>
            }
            {data?.addedToShelf ? (
              <button
                onClick={() => {
                  RemoveFromShelfFunction();
                }}
                className="mt-4 text-md font-sans flex flex-row items-center justify-center gap-x-2 font-semibold w-full text-white bg-red-600 py-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                Remove
                <img src={RemoveIcon} alt="" className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => AddingFunction()}
                className="mt-4 text-lg font-sans flex flex-row items-center justify-center gap-x-2 font-semibold w-full text-white bg-[#1353fe] py-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                Add to shelf
                <img src={AddIcon} alt="" className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
