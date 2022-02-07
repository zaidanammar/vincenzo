import AxiosInstance from "../../../config/AxiosInstance";
import { IPagination, ISearch } from "../../../utils/entity/utils";
import { ITrack, ITracks } from "../entities";
import ITrackRepository from "../../track/repository";

export default class TrackRepository implements ITrackRepository {
  async getTopTrack(pagination?: IPagination): Promise<ITracks> {
    try {
      const data: { data: ITracks } = await AxiosInstance.API().get(
        `?method=chart.gettoptracks&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
        {
          params: { pagination },
        }
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }
  async getSearchTrack(search?: ISearch): Promise<ITrack[]> {
    try {
      const data: {
        data: { results: { trackmatches: { track: ITrack[] } } };
      } = await AxiosInstance.API().get(
        `?method=track.search&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
        {
          params: {
            track: search,
          },
        }
      );
      return data.data.results.trackmatches.track;
    } catch (error) {
      throw error;
    }
  }
}
