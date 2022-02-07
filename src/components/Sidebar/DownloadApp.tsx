import { Icon } from "../Icons";

const DownloadApp = () => {
  return (
    <h1 className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6 cursor-pointer">
      <Icon name="download" size={20} />
      Download App
    </h1>
  );
};

export default DownloadApp;
