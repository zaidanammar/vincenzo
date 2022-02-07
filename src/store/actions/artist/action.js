import ArtistRepository from "../../../core/artist/repository/artist";
import ArtistUsecase from "../../../core/artist/usecase/artist";
import { GET_TOP_ARTIST } from "../../types";

const getTopArtist = () => async (dispatch) => {
  try {
    const artistRepo = new ArtistRepository();
    const artistUsecase = new ArtistUsecase(artistRepo);
    const artists = await artistUsecase.getTopArtist();
    dispatch({
      type: GET_TOP_ARTIST,
      payload: artists,
    });
  } catch (error) {
    console.error("getTopArtist() error: " + error);
  }
};

export { getTopArtist };
