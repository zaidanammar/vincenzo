import { NavLink } from "react-router-dom";
import React from "react";
import { IArtist } from "../core/artist/entities";

interface IArtistItemProps {
  item: IArtist;
}

const ArtistItem: React.FC<IArtistItemProps> = ({ item }) => {
  return (
    <NavLink
      key={item.name}
      to="/"
      className="bg-footer p-4 rounded hover:bg-active group"
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image[1]?.["#text"]}
          className="absolute inset-0 object-cover w-full h-full rounded-full"
          alt="-"
        />
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.name}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.name}</p>
    </NavLink>
  );
};

export default ArtistItem;
