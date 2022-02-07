import { IAttr } from "../../utils/entity/utils";

export interface IArtist {
  name: string;
  mbid: string;
  url: string;
}

export interface IImage {
  ["#text"]: string;
  size: string;
}

export interface IStreamable {
  text: string;
  fulltrack: string;
}

export interface ITrack {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: IStreamable;
  artist: IArtist;
  image: IImage[];
}

export interface ITracks {
  track: ITrack[];
  attr: IAttr;
}
