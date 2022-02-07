import TrackRepository from "../../../core/track/repository/track";
import TrackUsecase from "../../../core/track/usecase/track";
import {
  CHANGE_SEARCH_VALUE,
  GET_SEARCH_TRACK,
  GET_TOP_TRACK,
} from "../../types";

const getTopTrack = () => async (dispatch) => {
  try {
    const trackRepo = new TrackRepository();
    const trackUsecase = new TrackUsecase(trackRepo);
    const tracks = await trackUsecase.getTopTrack();
    dispatch({
      type: GET_TOP_TRACK,
      payload: tracks,
    });
  } catch (error) {
    console.error("getTopTrack() error: " + error);
  }
};

const getSearchTrack = (search) => async (dispatch) => {
  try {
    const trackRepo = new TrackRepository();
    const trackUsecase = new TrackUsecase(trackRepo);
    const searchTracks = await trackUsecase.getSearchTrack(search);
    dispatch({
      type: GET_SEARCH_TRACK,
      payload: searchTracks,
    });
  } catch (error) {
    console.error("getSearchTrack() error: " + error);
  }
};

const changeSearchValue = (value) => (dispatch) => {
  try {
    dispatch({
      type: CHANGE_SEARCH_VALUE,
      payload: value,
    });
  } catch (error) {
    console.error("changeSearchValue() error: " + error);
  }
};

export { getTopTrack, getSearchTrack, changeSearchValue };
