export const INIT = "@@/INIT";
export const init = () => ({ type: INIT });

export const SET_HISTORY = "@@/SET_HISTORY";
export const setHistory = (history) => ({ type: SET_HISTORY, payload: { history } });

export const CHANGE_VIDEO = "@@/CHANGE_VIDEO";
export const changeVideo = (url, time = 0) => ({ type: CHANGE_VIDEO, payload: { url, time } });
