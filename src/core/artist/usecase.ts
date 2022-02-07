import { IPagination } from "../../utils/entity/utils";
import { IArtists } from "./entities";

export default interface IArtistUsecase {
  getTopArtist(pagination?: IPagination): Promise<IArtists>;
}
