import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
// import {useRouteMatch} from "react-router-dom";
import Search from "./Navbar/Search";
import { useLocation } from "react-router";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />

      {pathname === "/search" && <Search />}

      <Auth />
    </nav>
  );
}

export default Navbar;
