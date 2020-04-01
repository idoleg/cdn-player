import { INIT, CHANGE_VIDEO, setHistory, changeVideo } from "./actions";
import { getHistory, pushToHistory } from "../libs/DeviceHistory";


export const history = (store) => (next) => (action) => {
  console.log("history -> action", store.getState(), action);
  switch (action.type) {
  case INIT: {
    const history = getHistory();
    if(history.length){
      const {source, time} = history[0];
      store.dispatch(changeVideo(source, time));
    }else{
      store.dispatch(setHistory(history));
    }
    return next(action);
  }
  case CHANGE_VIDEO: {
    const history = pushToHistory(action.payload.url, action.payload.time);
    store.dispatch(setHistory(history));
    return next(action);
  }
  default:
    return next(action);
  }
};
