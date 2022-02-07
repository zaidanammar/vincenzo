import { IPagination, ISearch } from "../../utils/entity/utils";
import { ITrack, ITracks } from "./entities";

export default interface ITrackRepository {
  getTopTrack(pagination?: IPagination): Promise<ITracks>;
  getSearchTrack(search?: ISearch): Promise<ITrack[]>;
}
