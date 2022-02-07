import logo from "../assets/logo.svg";
import Menu from "../components/Sidebar/Menu";
import Playlists from "../components/Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
import { Icon } from "./Icons";

const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <button className="mb-7 px-6">
        <img src={logo} alt="logo" className="h-10" />
      </button>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <h1 className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Create Playlist
            </h1>
          </li>
          <li>
            <h1 className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name="heartFilled" size={12} />
              </span>
              Liked Songs
            </h1>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />
    </aside>
  );
};

export default Sidebar;
