import { IPagination } from "../../../utils/entity/utils";
import { IArtists } from "../entities";
import IArtistRepository from "../repository";
import IArtistUsecase from "../usecase";

export default class ArtistUsecase implements IArtistUsecase {
  private ArtistRepo: IArtistRepository;
  constructor(ArtistRepo: IArtistRepository) {
    this.ArtistRepo = ArtistRepo;
  }

  async getTopArtist(pagination?: IPagination): Promise<IArtists> {
    return await this.ArtistRepo.getTopArtist(pagination);
  }
}
