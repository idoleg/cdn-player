import React, {useEffect, createContext} from "react";
import useMiddlewareReducer from "use-middleware-reducer";

import reducer from "./reducer";
import {init} from "./actions";
import {history} from "./middlewares";

const initState = {
  videoUrl: "",
  time: 0,
  history: []
};

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const store = useMiddlewareReducer(reducer, initState, [history]);
  const [, dispatch] = store;
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
