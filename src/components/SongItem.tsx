import React from "react";
import { ITrack } from "../core/track/entities";

interface ISongItemProps {
  item: ITrack;
}

const SongItem: React.FC<ISongItemProps> = ({ item }) => {
  return (
    <section
      key={item.name}
      className="bg-footer p-4 rounded hover:bg-active group cursor-pointer"
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image[1]?.["#text"]}
          className="absolute inset-0 object-cover w-full h-full"
          alt="-"
        />
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.name}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.artist.name}</p>
    </section>
  );
};

export default SongItem;
