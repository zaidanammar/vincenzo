import { combineReducers } from "redux";
import artistReducer from "./artist/artistReducer";
import trackReducer from "./track/trackReducer";

export default combineReducers({
  track: trackReducer,
  artist: artistReducer,
});
