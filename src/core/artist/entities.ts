import { IAttr } from "../../utils/entity/utils";

export interface IImage {
  ["#text"]: string;
  size: string;
}

export interface IArtist {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: IImage[];
}

export interface IArtists {
  artist: IArtist[];
  attr: IAttr;
}
