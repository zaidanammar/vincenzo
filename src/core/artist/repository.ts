import { IPagination } from "../../utils/entity/utils";
import { IArtists } from "./entities";

export default interface IArtistRepository {
  getTopArtist(pagination?: IPagination): Promise<IArtists>;
}
