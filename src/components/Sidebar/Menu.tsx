import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span>
              <Icon name="home" size={24} />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span>
              <Icon name="search" size={24} />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span>
              <Icon name="collection" size={24} />
            </span>
            Collection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
