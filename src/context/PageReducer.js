const pageReducer = (state, action) => {
  switch (action.type) {
    case "PLANETS":
      return {
        ...state,
        page: "planets",
        activePeoplePage: false,
        activePlanetsPage: true,
      };
    case "PEOPLES":
      return {
        ...state,
        page: "peoples",
        activePeoplePage: true,
        activePlanetsPage: false,
      };
    case "NEXT_PAGE":
      if (action.payload === "planets") {
        return {
          ...state,
          planetsPage: state.planetsPage + 1,
          initPage: state.initPage + 1,
        };
      } else {
        return {
          ...state,
          peoplePage: state.peoplePage + 1,
          initPage: state.initPage + 1,
        };
      }
    case "PREV_PAGE":
      if (action.payload === "planets") {
        return {
          ...state,
          planetsPage: state.planetsPage - 1,
          initPage: state.initPage - 1,
        };
      } else {
        return {
          ...state,
          peoplePage: state.peoplePage - 1,
          initPage: state.initPage - 1,
        };
      }
    default:
      return state;
  }
};

export default pageReducer;
