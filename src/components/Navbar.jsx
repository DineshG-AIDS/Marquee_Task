import { Link } from "react-router-dom";
import React, { useState } from "react";
import LogoForMarquee from "../asserts/logo.png";
import SearchIcon from "../asserts/SearchIcon.png";
import BookIcon from "../asserts/BookIcon1.png";
import { useDispatch, useSelector } from "react-redux";

import SearchIconBlue from "../asserts/SearchIconBlue.png";
import BookIconBlue from "../asserts/BookIconBlue.png";
import TrendingIcon from "../asserts/TrendingNavBarIcon.png";

import TrendingIconBlue from "../asserts/TrendingNavBarIconBlue.png";
import {
  ToggleSearchBar,
  TrendingBooksApi,
} from "../store/Reducers/UserDetails";
import UserIcon from "../asserts//UserIconBlack.png";
import UserIconBlue from "../asserts/UserIconBlue.png";

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const UserDetails = useSelector((state) => state.User);
  const dispatch = useDispatch();

  return (
    <>
      <div className="px-4 border-b border-[#1353fe] p-2 ">
        <div className="flex items-center justify-between ">
          <div className="flex shrink-0 pl-4">
            <Link to="/" className="flex items-center" href="/">
              <img
                className=""
                src={LogoForMarquee}
                alt="Marquee_logo"
                title="Book for every one"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-10">
            {window.location.pathname === "/" ? (
              <>
                {UserDetails?.ShowSearchBar ? (
                  <div
                    className=" flex flex-row items-center gap-x-1 cursor-pointer"
                    onClick={() => dispatch(ToggleSearchBar(false))}
                  >
                    <img src={SearchIconBlue} alt="" className="w-8" />
                    <h1 className={"text-[#1353fe] font-sans font-semibold"}>
                      Search
                    </h1>
                  </div>
                ) : (
                  <div
                    className=" flex flex-row items-center gap-x-1 cursor-pointer"
                    onMouseEnter={() => setHoveredIcon("search")}
                    onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => dispatch(ToggleSearchBar(true))}
                  >
                    <img
                      src={
                        hoveredIcon === "search" ? SearchIconBlue : SearchIcon
                      }
                      alt=""
                      className="w-8"
                    />
                    <h1
                      className={
                        hoveredIcon === "search"
                          ? "text-[#1353fe] font-sans font-semibold"
                          : "font-sans font-semibold"
                      }
                    >
                      Search
                    </h1>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className=" flex flex-row items-center gap-x-1 cursor-pointer"
                  onMouseEnter={() => setHoveredIcon("search")}
                  onMouseLeave={() => setHoveredIcon(null)}
                  onClick={() => dispatch(ToggleSearchBar(true))}
                >
                  <img
                    src={hoveredIcon === "search" ? SearchIconBlue : SearchIcon}
                    alt=""
                    className="w-8"
                  />
                  <h1
                    className={
                      hoveredIcon === "search"
                        ? "text-[#1353fe] font-sans font-semibold"
                        : "font-sans font-semibold"
                    }
                  >
                    Search
                  </h1>
                </Link>
              </>
            )}
            <Link
              to="/mybooks"
              className=" flex flex-row items-center gap-x-1 cursor-pointer"
              onMouseEnter={() => setHoveredIcon("book")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={
                  window.location.pathname === "/mybooks" ||
                  hoveredIcon === "book"
                    ? BookIconBlue
                    : BookIcon
                }
                alt=""
                className="w-8"
              />
              <h1
                className={
                  window.location.pathname === "/mybooks" ||
                  hoveredIcon === "book"
                    ? "text-[#1353fe] font-sans font-semibold"
                    : "font-sans font-semibold"
                }
              >
                My Shelf
              </h1>
            </Link>
            <Link
              to="/trending"
              className=" flex flex-row items-center gap-x-1 cursor-pointer"
              onMouseEnter={() => setHoveredIcon("trend")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={
                  window.location.pathname === "/trending" ||
                  hoveredIcon === "trend"
                    ? TrendingIconBlue
                    : TrendingIcon
                }
                alt=""
                className="w-8"
              />
              <h1
                className={
                  window.location.pathname === "/trending" ||
                  hoveredIcon === "trend"
                    ? "text-[#1353fe] font-sans font-semibold"
                    : "font-sans font-semibold"
                }
              >
                Trending
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3 pt-2 pr-4">
            <div
              className=" flex flex-row items-center gap-x-1 cursor-pointer"
              onMouseEnter={() => setHoveredIcon("user")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={hoveredIcon === "user" ? UserIconBlue : UserIcon}
                alt=""
                className="w-8"
              />
              <h1
                className={
                  hoveredIcon === "user"
                    ? "text-[#1353fe] font-sans font-semibold"
                    : "font-sans font-semibold"
                }
              >
                Marquee User
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
