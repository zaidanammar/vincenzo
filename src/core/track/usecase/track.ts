import { IPagination, ISearch } from "../../../utils/entity/utils";
import { ITrack, ITracks } from "../entities";
import ITrackRepository from "../../track/repository";
import ITrackUsecase from "../../track/usecase";

export default class TrackUsecase implements ITrackUsecase {
  private trackRepo: ITrackRepository;
  constructor(trackRepo: ITrackRepository) {
    this.trackRepo = trackRepo;
  }

  async getTopTrack(pagination?: IPagination): Promise<ITracks> {
    return await this.trackRepo.getTopTrack(pagination);
  }

  async getSearchTrack(search?: ISearch): Promise<ITrack[]> {
    return await this.trackRepo.getSearchTrack(search);
  }
}
