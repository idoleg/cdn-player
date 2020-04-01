import { CHANGE_VIDEO, SET_HISTORY } from "./actions";

export default (state, action) => {
  switch (action.type) {
  case CHANGE_VIDEO:
    return {
      ...state,
      videoUrl: action.payload.url,
      time: action.payload.time,
    };
  case SET_HISTORY:
    return {
      ...state,
      history: action.payload.history
    };

  default:
    return state;
  }
};
