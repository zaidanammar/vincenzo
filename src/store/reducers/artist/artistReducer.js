import { GET_TOP_ARTIST } from "../../types";

const initialState = {
  artists: {},
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_ARTIST:
      return {
        ...state,
        artists: action.payload.artists,
      };
    default:
      return state;
  }
};

export default artistReducer;
