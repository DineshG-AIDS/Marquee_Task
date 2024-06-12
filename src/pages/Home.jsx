import Navbar from "../components/Navbar";
import TrendingIcon from "../asserts/TrendingIcon.png";
import GifForSearch from "../asserts/icons8-search.gif";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSearchBar } from "../store/Reducers/UserDetails";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import URLBuilder from "../helper/URLBuilder";
import CardComponent from "../components/CardComponent";
import { FallingLines } from "react-loader-spinner";
import Footer from "../components/Footer";

const Home = () => {
  const USerDetails = useSelector((state) => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${URLBuilder(USerDetails)}`
    );
  });
  return (
    <>
      <Navbar />
      <section className="relative">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
              A room without books is like a body without a{" "}
              <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">
                soul
              </span>
            </h1>
            <p className="mx-auto mb-5 max-w-[628px] text-xl text-[#636262] lg:mb-8">
              Read every book for free here and explore a world of knowledge and
              adventure.
            </p>
            {USerDetails?.ShowSearchBar ? (
              <SearchBar />
            ) : (
              <div className="flex justify-center flex-col sm:flex-row sm:gap-x-9 gap-y-6 md:flex-row md:gap-x-9">
                <p
                  onClick={() => dispatch(ToggleSearchBar(true))}
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-1  rounded-xl bg-black px-6 py-3 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"
                >
                  <img src={GifForSearch} alt="" className="w-8" />
                  Start Searching 💫
                </p>
                <Link
                  to="/trending"
                  className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]"
                >
                  <img
                    src={TrendingIcon}
                    alt=""
                    className="mr-2 inline-block w-6"
                  />
                  <p className="text-black">Trending Books 🎉</p>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* BG Images */}
        {USerDetails?.SearchText?.length > 1 ? (
          USerDetails?.Loading ? (
            <div className="-mt-48 pl-[45rem]">
              <FallingLines
                color="#1353fe"
                width="250"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            </div>
          ) : null
        ) : (
          <>
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
              alt=""
              className="absolute -bottom-20 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
            />
            <div>
              <div className="relative mx-auto h-[212px] md:w-1/2 md:-mt-32">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d247ab06a755ee4aaee_magicpattern-KfFmwa7m5VQ-unsplash.jpg"
                  alt=""
                  className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
                />
                <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
              </div>
            </div>
          </>
        )}
      </section>{" "}
      {USerDetails?.SearchText?.length > 1 ? (
        <>
          {USerDetails?.Loading ? (
            ""
          ) : (
            <>
              {USerDetails?.SearchText?.length > 1 ? (
                <>
                  {/* <hr className="bg-[#1353fe] h-0.5 w-[120rem] -ml-64 md:pt-0 mt-20" />{" "} */}
                  <div className="md:px-10 md:pl-20 md:-mt-32 pl-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 md:space-y-4 pb-10">
                    {USerDetails?.BooksData?.docs.map((value, i) => (
                      <div key={i}>
                        <CardComponent data={value} />
                      </div>
                    ))}
                  </div>{" "}
                  <h1 className="pl-20 font-sans font-semibold text-[#1353fe]">
                    Total Results : {USerDetails?.BooksData?.numFound}
                  </h1>
                </>
              ) : (
                <>
                  {" "}
                  <div className="relative mx-auto h-[512px]">
                    <img
                      src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d247ab06a755ee4aaee_magicpattern-KfFmwa7m5VQ-unsplash.jpg"
                      alt=""
                      className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
                  </div>
                </>
              )}
            </>
          )}
          <Footer />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Home;
