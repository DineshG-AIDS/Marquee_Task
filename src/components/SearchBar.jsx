import { useDispatch, useSelector } from "react-redux";
import {
  BooksApi,
  ChangeSearchText,
  UpdateLimitPerPage,
  UpdatePageNumber,
  UpdateSearchHistory,
  clearSearchHistory,
} from "../store/Reducers/UserDetails";
import { useEffect, useState } from "react";
import { ErrorToast } from "../components/utils/Toast";
import { Toast } from "../components/utils/Toast";
import HistoryIcon from "../asserts/HistoryBlue.png";
import HideIcon from "../asserts/HideIcon.png";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [SearchValue, SetSearchValue] = useState("");
  const [ShowHistory, SetShowHistory] = useState(false);
  const USerDetails = useSelector((state) => state.User);
  useEffect(() => {
    SetSearchValue(USerDetails.SearchText);
  }, [dispatch]);
  const SearchHandler = () => {
    if (SearchValue.length > 1) {
      dispatch(UpdatePageNumber(1));
      dispatch(UpdateLimitPerPage(10));
      dispatch(ChangeSearchText(SearchValue));
      dispatch(BooksApi());
      dispatch(UpdateSearchHistory(SearchValue));
    } else {
      ErrorToast("Type Something");
    }
  };
  return (
    <>
      <Toast />
      <label
        className="mx-auto  relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          value={SearchValue}
          placeholder="Enter Your Favorite Book"
          onChange={(e) => SetSearchValue(e.target.value)}
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
        />
        <button
          onClick={() => {
            SearchHandler();
          }}
          className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
        >
          <div className="flex items-center transition-all opacity-1 z-50">
            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
              Search
            </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </button>
      </label>
      <div>
        <div className="md:pl-14 justify-end md:justify-start p-2 flex flex-row items-center r">
          {!ShowHistory && (
            <>
              <h1
                onClick={() =>
                  USerDetails?.SearchHistory.length > 0
                    ? SetShowHistory(true)
                    : ErrorToast("Not Enough Data")
                }
                className="text-[#1353fe] font-sans font-semibold cursor-pointer"
              >
                Show History
              </h1>{" "}
              <img
                onClick={() =>
                  USerDetails?.SearchHistory.length > 0
                    ? SetShowHistory(true)
                    : ErrorToast("Not Enough Data")
                }
                width="24"
                height="24"
                className="pt-1.5 pl-1 cursor-pointer"
                src={HistoryIcon}
                alt="time-machine--v1"
              />
            </>
          )}
          {ShowHistory && USerDetails?.SearchHistory.length > 0 && (
            <div className="text-white pl-2 flex flex-row gap-x-2 font-sans font-semibold  flex-wrap gap-y-3">
              {USerDetails?.SearchHistory?.map((value, i) => (
                <div className="">
                  <h1
                    key={i}
                    className="bg-[#1353fe] p-2 rounded-lg px-4 cursor-default"
                  >
                    {value}
                  </h1>
                </div>
              ))}
              <div
                onClick={() => {
                  dispatch(clearSearchHistory());
                  SetShowHistory(false);
                }}
              >
                <img
                  width="30"
                  height="30"
                  src={HideIcon}
                  alt="cancel"
                  className="pt-1.5 cursor-pointer"
                  title="Close"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
