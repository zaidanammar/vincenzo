import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";

import Navbar from "../components/Navbar";

function Content() {
  return (
    <main className="flex-auto overflow-auto w-full">
      <Navbar />
      <div className="md:px-8 md:py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
