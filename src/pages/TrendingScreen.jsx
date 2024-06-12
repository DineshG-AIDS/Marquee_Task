import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FallingLines } from "react-loader-spinner";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { TrendingBooksApi } from "../store/Reducers/UserDetails";
import CardComponent from "../components/CardComponent";

const TrendingScreen = () => {
  const USerDetails = useSelector((state) => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TrendingBooksApi());
  }, [""]);
  return (
    <>
      {" "}
      <Navbar />
      {USerDetails?.Loading ? (
        <div className="mt-64 pl-[46rem]">
          <FallingLines
            color="#1353fe"
            width="250"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      ) : (
        <>
          <div className="md:px-10 md:pl-20 md:mt-32 pl-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 md:space-y-4 pb-10">
            {USerDetails?.TrendsBookData?.works?.map((value, i) => (
              <div key={i}>
                <CardComponent data={value} />
              </div>
            ))}
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default TrendingScreen;
