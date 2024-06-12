import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrendingScreen from "./pages/TrendingScreen";
import MyBooks from "./pages/Mybooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/trending" element={<TrendingScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
