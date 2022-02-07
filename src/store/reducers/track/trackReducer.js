import {
  GET_SEARCH_TRACK,
  GET_TOP_TRACK,
  CHANGE_SEARCH_VALUE,
} from "../../types";

const initialState = {
  tracks: {},
  searchTracks: [],
  searchValue: "",
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_TRACK:
      return {
        ...state,
        tracks: action.payload.tracks,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case GET_SEARCH_TRACK:
      return {
        ...state,
        searchTracks: action.payload,
      };
    default:
      return state;
  }
};

export default trackReducer;
