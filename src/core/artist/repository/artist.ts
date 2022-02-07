import AxiosInstance from "../../../config/AxiosInstance";
import { IPagination } from "../../../utils/entity/utils";
import { IArtists } from "../entities";
import IArtistRepository from "../repository";

export default class ArtistRepository implements IArtistRepository {
  async getTopArtist(pagination?: IPagination): Promise<IArtists> {
    try {
      const data: { data: IArtists } = await AxiosInstance.API().get(
        `?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
        {
          params: {
            limit: pagination?.limit || 12,
            page: pagination?.page || 1,
          },
        }
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}
