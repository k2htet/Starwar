import { createContext, useContext, useReducer } from "react";
import pageReducer from "./PageReducer";

const PageContext = createContext();

const initialState = {
  page: "planets",
  planetsPage: 1,
  peoplePage: 1,
  activePeoplePage: false,
  activePlanetsPage: true,
  initPage: 0,
};

export const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, initialState);
  return (
    <PageContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);

export default PageContext;
